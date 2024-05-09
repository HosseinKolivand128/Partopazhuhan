const { Products } = require("../models/Products.schema.js")
async function sendProduct(req, res) {
    try {
        const newProduct = {
            description: req.body.description,
            title: req.body.title,
            instructions: req.body.instructions,
            name: `(${req.body.name})`,
            image: req.body.image,
            usage: req.body.usage,
            file: req.body.file
        };
        // console.log(newProduct);
        await Products.create(newProduct);
        res.status(201).json({ message: "Product added to database successfully" })
    } catch (error) {
        console.log(error);
    }
}
async function getProductByName(req, res) {
    try {
        const product = await Products.findOne({ name: `(${req.params})` })
        res.json(product).status(201)
    } catch (error) {
        console.log(error);
    }
}

async function getAllProducts(req, res) {
    try {
        const product = await Products.find()
        res.json(product).status(201)

    } catch (error) {
        console.log(error);
    }

}
// async function createUser(params) {

// }

module.exports = { sendProduct, getProductByName, getAllProducts }