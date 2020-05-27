require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { userRouter } = require("./routers");
const { taskRouter } = require("./routers");
// const { profileRouter } = require("./routers");
// const { tagRouter } = require("./routers");

const helmet = require("helmet");
const server = express();


server.use(express.json());
server.use(cors());
server.use(helmet());
server.use("/api", userRouter);
server.use("/api", taskRouter);
// server.use("/api", profileRouter);
// server.use("/api", tagRouter);



server.get("/", (req, res) => {
    res.json({ message: "SERVER IS LIVE" });
});


const PORT = process.env.PORT || 7000;


server.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}!!!`);
});