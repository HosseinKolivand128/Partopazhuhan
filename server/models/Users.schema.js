const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    Email: {
        type: String,
    },
    Phone: {
        type: String,
    },
    Cart: {
        type: [String],
    },
    address: {
        type: String
    }
})
const User = mongoose.model("user", UserSchema);

module.exports = { User }