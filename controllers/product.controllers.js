// import model
const Product = require("../models/product.model");

const routeProduct = (req, res) => {
    res.json("product route loaded successful");
};

const getAllProducts = (req, res) => {
    Product.find().then((result) => {
        res.json(result);
    });
};

const getProductsByUserId = (req, res) => {
    const user = req.params.userID;
    Product.find({ added_by: user })
        // .populate("added_by")
        .then((result) => {
            res.json(result);
        });
};

const getUserByProductId = (req, res) => {
    // all the products
    // Product.find().then((data) => {
    //     res.json(data)
    // }
    // )

    // find 1 product based on id
    Product.findById(req.params.productId)
        .populate("added_by") // add the user object based on added_by
        .then((data) => {
            res.json(data);
        });
};

const { faker } = require("@faker-js/faker");
const addProduct = (req, res) => {
    const userId = req.params.userId;
    const productData = {
        product_title: faker.commerce.product(),
        price: faker.commerce.price(),
        quantity: faker.datatype.number(),
        created_at: Date.now(),
        added_by: userId, // for now manually, normally set after login or event
    };
    new Product(productData).save(() => {
        console.log("One new Product created from Faker");
        res.json("One new product has been added");
    });
};


const addCustomizedProduct = (req, res) => {
    const userId = req.params.userId;
    const productData = req.body;

    productData.added_by = userId;
    console.log(productData);
    new Product(productData).save(() => {
        console.log("One new Product created ");
        res.json("One Customized product has been added");
    });
};

// delete product by id
const deleteProductById = (req, res) => {
    Product.findByIdAndDelete(req.params.productId)
    .then( () => res.json("Product deleted"))
    .catch(err => res.status(400).json("Error: " + err));
}

module.exports = {
    routeProduct,
    addProduct,
    getAllProducts,
    getProductsByUserId,
    getUserByProductId,
    addCustomizedProduct,
    deleteProductById,
};
