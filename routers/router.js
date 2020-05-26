const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("../models/model");

const secrets = require("../config/secrets");

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