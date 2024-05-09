const express = require("express")
const cors = require("cors");
const mongoose = require("mongoose");
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    // console.log("hi");
    next();
})
async function start() {
    try {
        await mongoose.connect(process.env.mongoURI)
        app.listen(8000, () => {
            console.log(`server is running on port ${8000}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start();

//!Creating Schema
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



//!Routes
app.get("/", async (req, res) => {
    const data = await Products.find({});
    res.send(data).status(200)
});
app.post("/sendProduct", async (req, res) => {
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
})
app.post("/createUser", async (req, res) => {
    try {
        const newUser = {
            username: req.body.username,
            password: req.body.password,
            // Email: req.body.email,
        };
        // console.log(newUser);
        await User.create(newUser);
        res.status(201).json({ message: "User added to database successfully" })
    } catch (error) {
        console.log(error);
    }
})

app.get("/products/:name", async (req, res) => {
    try {
        const product = await Products.findOne({ name: `(${req.params})` })
        res.json(product).status(201)
    } catch (error) {
        console.log(error);
    }
})
app.get("/users/:id", async (req, res) => {
    try {
        const { id: _id } = req.params
        const user = await User.findById({ _id })
        res.json(user).status(201)
    } catch (error) {
        console.log(error);
    }
})



app.get("/getAllProducts", async (req, res) => {
    try {
        const product = await Products.find()
        res.json(product).status(201)

    } catch (error) {
        console.log(error);
    }
})
app.get("/getAllUsers", async (req, res) => {
    try {
        console.log("hiiiiii");
        const users = await User.find();
        if (users === null || users.length === 0) {
            return res.status(404).json({ error: "No users found" });
        }

        res.json(users).status(200);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ error: "Failed to fetch users" });
    }
});