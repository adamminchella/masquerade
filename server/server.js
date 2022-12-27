const express = require("express");
const cors = require("cors");

const userRouter = require("./routers/user");
const sightingRouter = require("./routers/sighting");

const server = express();

server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to Masquerade" });
});

server.use("/users", userRouter);
server.use("/sightings", sightingRouter);

module.exports = server;
