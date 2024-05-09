const { Router } = require("express");
const router = Router();
const { createUser, getUserById, getAllUsers } = require("../controllers/users.controllers.js")
/**
 * @URL: /createUser
 * @Method: POST
 * @Status: Public
 * @Description: Create new user
 */
router.post("/createUser", createUser);
/**
 * @URL: /users/:id
 * @Method: GET
 * @Status: Public
 * @Description: get an user by id
 */
router.get("/users/:id", getUserById);
/**
 * @URL: /getAllUsers
 * @Method: GET
 * @Status: Public
 * @Description: get all users */
router.get("/getAllUsers", getAllUsers);

module.exports = router
