const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const server = express();


// MIDDLEWARE
server.use(helmet());
server.use(cors());
server.use(express.json());

// ROUTER IMPORTS 
// const authRouter = require("../routers/auth");

// ROUTERS 
// server.use("/api/auth", authRouter); 
// lines 13 & 16 are causing my errors

server.get("/", (req, res) => {
    res.json({ message: "SERVER IS LIVE" });
});

module.exports = server;