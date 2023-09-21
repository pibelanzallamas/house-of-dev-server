const express = require("express");
const users = express.Router();
const { Users } = require("../models");
const { generateToken, validateToken } = require("../config/tokens.js");
const transporter = require("../utils/mail");

users.post("/register", (req, res) => {
  const { email, name, password, telephone } = req.body;

  const admins = [process.env.EMAIL_ADMINS];
  const admin = admins.includes(email);

  Users.findOrCreate({
    where: { email },
    defaults: {
      name,
      password,
      telephone,
      admin,
    },
  })
    .then((user) => res.send(user).status(200))
    .catch((err) => res.send(err).status(400));
});

users.post("/login", (req, res) => {
  const { email, password } = req.body;

  Users.findOne({ where: { email } })
    .then((user) => {
      if (!user) return res.sendStatus(401); //usuario no registrado

      user.validatePassword(password).then((isValid) => {
        if (!isValid) return res.sendStatus(401); //contrasenia incorrecta

        const payload = {
          id: user.id,
          email: user.email,
          name: user.name,
          telephone: user.telephone,
          admin: user.admin,
        };

        const token = generateToken(payload);
        res.cookie("token", token);
        res.send(payload);
      });
    })
    .catch((err) => res.send(err));
});

users.get("/all", (req, res) => {
  Users.findAll({ order: [["id", "ASC"]] })
    .then((one) => res.send(one).status(200))
    .catch((err) => res.send(err).status(400));
});

//devuelve 1 user
users.get("/:id", (req, res) => {
  const { id } = req.params;

  Users.findOne({ where: { id } })
    .then((one) => res.send(one).status(200))
    .catch((err) => res.send(err).status(400));
});

users.put("/:id", (req, res) => {
  const { id } = req.params;
  const data = req.body;

  Users.update(data, { where: { id } })
    .then((upd) => {
      if (upd > 0) res.sendStatus(200);
      else res.sendStatus(400);
    })
    .catch(() => res.sendStatus(400));
});

users.post("/me", (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.sendStatus(401);
  const { payload } = validateToken(token);
  if (!payload) return res.sendStatus(401);
  res.send(payload);
});

users.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.sendStatus(204);
});

users.delete("/:id", (req, res) => {
  const { id } = req.params;

  Users.destroy({ where: { id } })
    .then(() => res.sendStatus(200))
    .catch(() => res.sendStatus(400));
});

users.post("/send/:email", (req, res) => {
  const { email } = req.params;
  const { date } = req.body;

  const mailOptions = {
    from: "griffin11@ethereal.email",
    to: email,
    subject: "House of Dev - Confirmación de Cita",
    text: "Hola, somos el equipo de House of Dev, queremos confirmarle su cita. ",
    html: `<h1 style="color: blue;"> Su cita ha sido confirmada!</h1> <p> La fecha reservada es a las  ${
      date.slice(11, 13) - 3
    }:${date.slice(14, 16)} hs, el día ${date.slice(8, 10)}/${date.slice(
      5,
      7
    )}/${date.slice(0, 4)}.</p> <p>Esperamos su visita! </p>
  <p> Haga click <a href="http://localhost:3000">aquí</a> para ingresar a House of Dev. </p> <p>Saludos!</p>`,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) res.send(err);
    else res.send(info);
  });
});

module.exports = users;
