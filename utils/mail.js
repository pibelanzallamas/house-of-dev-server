const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "theresia.morar@ethereal.email",
    pass: "njUVC4ExeCRYfQ6Equ",
  },
});

module.exports = transporter;
