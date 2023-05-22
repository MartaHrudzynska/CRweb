const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const router = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    message: "Hello World",
  });
});

app.use("/api", router);

const PORT = process.env.PORT || 5000;

// mongoose.connect("mongodb+srv://user:user@figma.uxpneam.mongodb.net/events")
//   .then(() => app.listen(PORT, ()  => console.log(`Run at port ${PORT}`)))

mongoose.connect("mongodb+srv://test:test@cluster0.fh77d96.mongodb.net/events")
  .then(() => app.listen(PORT, ()  => console.log(`Run at port ${PORT}`)))
