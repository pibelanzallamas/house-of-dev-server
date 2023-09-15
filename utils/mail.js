const nodemailer = require("nodemailer");
import "dotenv/config";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
});

const mailOptions = {
  from: process.env.MAIL_USERNAME,
  to: "notasbrandon@icloud.com",
  subject: "House of Dev - Confirmación de Cita",
  text: "Hola, somos el equipo de House of Dev, queremos confirmarle su cita. ",
  html: `<h1> Su cita ha sido confirmada! </h1> <p> Pronto estaremos en contacto. <p>
  <p> Haga click <a href="http://localhost:3000">aquí</a> para visitar la página. </p>`,
};

transporter.sendMail(mailOptions, (err, data) => {
  if (err) console.log("Error " + err);
  else console.log("Email sent successfully " + data);
});
