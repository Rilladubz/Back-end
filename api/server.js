const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const server = express();


// MIDDLEWARE
server.use(helmet());
server.use(cors());
server.use(express.json());



server.get("/", (req, res) => {
    res.json({ message: "SERVER IS LIVE" });
});

module.exports = server;