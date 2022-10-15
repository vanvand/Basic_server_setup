const express = require("express")
const router = express.Router();

// Import Controller
const {routeUser, createUser, getAllUsers, getUserById, addUser, loginUser} = require("../controllers/user.controllers")


router.get("/", routeUser)

// from sendToBackend
router.post("/create", createUser)

// get all users
router.get("/all", getAllUsers)

// get one user by id
router.get("/:id", getUserById)

// login a user
router.post("/login", loginUser)

// get massive data from fakerjs for test
router.get("/add", addUser)


module.exports = router;