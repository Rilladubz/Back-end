require("dotenv").config();
const server = require("./api/server");


const { userRouter } = require("./routers/user_router.js");
server.use("/api", userRouter);


//define port
const PORT = process.env.PORT || 7000;


server.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}!!!`);
});