// models
const Event = require("../models/Event")

const getAll = async (req, res) => {
    const { city, date, type } = req.body

    const events = await Event.find({ city, date, type })

    return res.json(events);
}

const getOne = async (req, res) => {
    const { id } = req.params

    const event = await Event.findOne({ _id: id })

    return res.json(event);
}

const addEvent = async (req, res) => {
    const event = new Event(req.body)
    await event.save()
  
    return res.json({
      event
    });
}

module.exports = {
    getOne,
    getAll,
    addEvent
};
