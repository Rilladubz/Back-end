require("dotenv").config();
const server = require("./api/server");

//define port
const PORT = process.env.PORT || 7000;


server.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}!!!`);
});