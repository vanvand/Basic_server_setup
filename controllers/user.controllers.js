// import model
const User = require("../models/user.model");

const routeUser = (req, res) => {
    res.json("user route loaded successful");
};

const createUser = (req, res) => {
    console.log(req.body); // according to user.model schema

    // save it to DB and response back to frontend
    new User(req.body).save(() => {
        console.log("User data saved ..."); // BE
        res.json("A user is created successfully"); // FE
    });
};

const loginUser = (req, res) => {
    // console.log(req.body) // request from FE

    // Check if user exist in DB
    User.findOne({
        email: req.body.email,
        password: req.body.password,
    }).then((user) => {
        // console.log(user)
        if (user != null) {
            res.json({
                message: "Login successful",
                user: user,
            });
        } else {
            // no matching user present
            res.json("Email or password is not correct!");
        }
    });
};

// add User with faker API data
const { faker } = require("@faker-js/faker");
const addUser = (req, res) => {
    const userData = {
        username: faker.name.findName(),
        password: faker.internet.password(),
        email: faker.internet.email(),
    };
    console.log(userData);

    new User(userData).save(() => {
        console.log("One new User data created from Faker");
        res.json("One new user created successfully");
    });
};

module.exports = { createUser, addUser, loginUser, routeUser };
