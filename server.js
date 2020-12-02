const express = require("express");
const cors = require("cors");

// Router imports go here
const actionRouter = require("./routers/actionRouter");
const projectRouter = require("./routers/projectRouter");

const server = express();

server.use(express.json());
server.use(cors());

server.use("/api/actions", actionRouter);
server.use("/api/projects", projectRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: "welcome" });
});

module.exports = server;
