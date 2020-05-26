require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { userRouter } = require("./routers");
// const { taskRouter } = require("./routers");
// const { profileRouter } = require("./routers");
// const { tagRouter } = require("./routers");
// const { avatarRouter } = require("./routers");
// const { taskTagRouter } = require("./routers");
const helmet = require("helmet");
const server = express();

// make sure that helmet is hiding the powered by
server.use(express.json());
server.use(cors());
server.use(helmet());
server.use("/api", userRouter);
// server.use("/api", taskRouter);
// server.use("/api", profileRouter);
// server.use("/api", tagRouter);
// server.use("/api", avatarRouter);
// server.use("/api", taskTagRouter);

// const server = require("./api/server.js");
const PORT = process.env.PORT || 7000;


server.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}!!!`);
});