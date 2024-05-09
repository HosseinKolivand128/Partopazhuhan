const { Router } = require("express");
const router = Router();
const { sendProduct, getProductByName, getAllProducts } = require("../controllers/products.controllers.js")
/**
 * @URL: /sendProduct
 * @Method: POST
 * @Status: Public
 * @Description: send a new product
 */
router.post("/sendProduct", sendProduct);
/**
 * @URL: "/products/:name"
 * @Method: GET
 * @Status: Public
 * @Description: get a product by name
 */
router.get("/products/:name", getProductByName);
/**
 * @URL: "/getAllProducts"
 * @Method: GET
 * @Status: Public
 * @Description: get All products
 */
router.get("/getAllProducts", getAllProducts);

module.exports = router
