const express = require("express");
const route = express.Router();
const AuthController = require("../controllers/authcontrollers")

route.post("/signup", AuthController.signUp);
// route.get("/", AuthController.Adminprotected, AuthController.getUsers);
route.post("/signup", AuthController.signUp);
route.post("/login", AuthController.login);
route.get("/checkAuth", AuthController.checkAuth);

module.exports = route;