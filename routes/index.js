const express = require("express")
const router = express.Router();

// import controllers
const {routeIndex} = require("../controllers/index.controllers")


router.get("/", routeIndex)


module.exports = router;
