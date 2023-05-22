const {Schema, model} = require("mongoose");

const schema = new Schema({
    title: {type: String, required: true},
    name: {type: String, required: true},
    surname: {type: String, required: true},
    imageSrc: {type: String, required: true},
    city: {type: String, required: true},
    date: {type: String, required: true},
    time: {type: String, required: true},
    description: {type: String, required: true},
    type: {type: Number, required: true},
    price: {type: String, required: true},
    place: {type: String, required: true},
})

module.exports = model("Event",schema);
