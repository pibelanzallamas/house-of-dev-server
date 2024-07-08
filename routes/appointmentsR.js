const express = require("express");
const appointments = express.Router();
const appointmentC = require("../controllers/appointmentsC");

appointments.post("/register", appointmentC.crearApp);

//check all
appointments.get("/all", appointmentC.allApp);

//check 1 user
appointments.get("/:uid", appointmentC.userApp);

//check 1 appointment
appointments.get("/find/one", appointmentC.checkApp);

appointments.delete("/:id", appointmentC.delApp);

module.exports = appointments;
