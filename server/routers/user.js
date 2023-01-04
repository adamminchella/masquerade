const express = require("express");
const userRouter = express.Router();

const authenticator = require("../middleware/authentication");

const userController = require("../controllers/user");

userRouter.get("/:id", userController.show);
userRouter.post("/register", userController.register);
userRouter.post("/login", userController.login);
userRouter.get("/logout/:id", authenticator, userController.logout);

module.exports = userRouter;
