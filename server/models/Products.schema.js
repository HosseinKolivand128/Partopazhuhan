const mongoose = require("mongoose");

const productsSchema = mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    instructions: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: [String],
        required: true
    },
    usage: {
        type: [String],
        required: true
    },
    file: {
        type: String,
        required: true
    }
})
const Products = mongoose.model("products", productsSchema);

module.exports = { Products }