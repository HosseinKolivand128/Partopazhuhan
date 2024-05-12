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

app.use( require("./routes/users.routes.js"));
app.use( require("./routes/products.routes.js"));
app.use("*", (req, res) => {
    res.status(404).json({ error: true, message: "not found" });
});

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

