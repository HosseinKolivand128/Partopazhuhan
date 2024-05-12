const { User } = require("../models/Users.schema.js")
async function createUser(req, res) {
    try {
        const newUser = {
            username: req.body.username,
            password: req.body.password,
            Email: req.body.email,
        };
        // console.log(newUser);
        await User.create(newUser);
        res.status(201).json({ message: "User added to database successfully" })
    } catch (error) {
        console.log(error);
    }

}
async function getUserById(req, res) {
    try {
        const { id: _id } = req.params
        const user = await User.findById({ _id })
        res.json(user).status(201)
    } catch (error) {
        console.log(error);
    }
}
async function getUserByUsername(req, res) {
    try {
        console.log(req.body);
        const username = req.body.username;
        const user = await User.findOne({ username })
        res.json(user).status(201)
    } catch (error) {
        console.log(error);
    }
}

async function getAllUsers(req, res) {
    try {
        const users = await User.find();
        if (users === null || users.length === 0) {
            return res.status(404).json({ error: "No users found" });
        }

        res.json(users).status(200);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ error: "Failed to fetch users" });
    }

}
// async function createUser(params) {

// }

module.exports = { createUser, getUserById, getAllUsers, getUserByUsername }