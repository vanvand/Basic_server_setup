const express = require("express");
const router = express.Router();

// import controllers
const {
    routeProduct,
    addProduct,
    getAllProducts,
    getProductsByUserId,
    getUserByProductId,
    addCustomizedProduct,
    deleteProductById,
} = require("../controllers/product.controllers");

router.get("/", routeProduct);

router.get("/all", getAllProducts);

// get all products for specific user
router.get("/all/:userID", getProductsByUserId);

router.get("/productByUser/:productId", getUserByProductId);

router.delete("/delete/:productId", deleteProductById);

// by faker API
router.get("/add/:userId", addProduct);

router.post("/add/customized/:userId", addCustomizedProduct);
module.exports = router;
