const express = require("express");
const appointments = express.Router();
const { Appointments, Properties } = require("../models");

appointments.post("/register", (req, res) => {
  const { uid, pid, date } = req.body.data;

  Appointments.findOrCreate({
    where: { uid, pid },
    defaults: { date },
  })
    .then(() => res.sendStatus(200))
    .catch(() => res.sendStatus(400));
});

appointments.get("/all", (req, res) => {
  const { uid } = req.query;

  Appointments.findAll({
    where: { uid },
    include: Properties,
    order: [["id", "DESC"]],
  })
    .then(() => res.sendStatus(200))
    .catch(() => res.sendStatus(400));
});

//de acuerdo a user o a una prop

appointments.get("/:uid", (req, res) => {
  const { uid } = req.params;

  Appointments.findAll({ where: { uid }, include: Properties })
    .then((all) => res.send(all))
    .catch((err) => res.send(err));
});

appointments.get("/prop/:pid", (req, res) => {
  const { pid } = req.params;

  Appointments.findAll({ where: { pid }, include: Users })
    .then((all) => res.send(all))
    .catch((err) => res.send(err));
});

appointments.delete("/delete", (req, res) => {
  const { uid, pid } = req.body;

  Appointments.destroy({ where: { uid, pid } })
    .then((filasAfectadas) => {
      if (filasAfectadas > 0) {
        res.sendStatus(200);
      } else {
        res.sendStatus(202);
      }
    })
    .catch(() => res.sendStatus(400));
});

module.exports = appointments;
