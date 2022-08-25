const express = require("express")
const router = express.Router();

// Import Controller
const {routeUser, createUser, addUser, loginUser} = require("../controllers/user.controllers")


router.get("/", routeUser)

// from sendToBackend
router.post("/create", createUser)

// login a user
router.post("/login", loginUser)


// get massive data from fakerjs for test
router.get("/add", addUser)


module.exports = router;