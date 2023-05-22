// core
const express = require("express");

// controllers
const login = require("../controllers/loginController");
const registration = require("../controllers/registrationController");
const eventsController = require("../controllers/eventController");

const router = express.Router();

router.post("/login", login);
router.post("/registration", registration);
router.get("/event/:id", eventsController.getOne);
router.post("/events", eventsController.getAll);
router.post("/add-event", eventsController.addEvent);

module.exports = router;