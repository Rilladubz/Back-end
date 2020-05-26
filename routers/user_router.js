const express = require("express");
const userModel = require("../models/model");
const bcrypt = require("bcryptjs");
const generateToken = require("../token/token-generator");
const authMiddleware = require("../middleware/auth");
const router = express();

function generateToken(user) {
    return jwt.sign(
        {
            userId: user.id
        },
        secrets.jwt,
        {
            expiresIn: "1h"
        } //1h = 1 hour
    );
}

// async/await

router.post("/register", (req, res) => {
    const credentials = req.body;
    const hash = bcrypt.hashSync(credentials.password, 12);
    credentials.password = hash;
    userModel
        .register(credentials)
        .then(newUser => {
            res.status(201).json({ message: `Welcome to Wunderlist!` });
        })
        .catch(err => {
            console.log("register error", err);
            res
                .status(500)
                .json({ errorMessage: `Error registering users at this time` });
        });
});