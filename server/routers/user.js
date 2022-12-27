const express = require("express");
const userRouter = express.Router();

const userController = require("../controllers/user");

userRouter.get("/:id", userController.show);
userRouter.post("/register", userController.register);
userRouter.post("/login", userController.login);
userRouter.get("/logout/:id", userController.logout);

module.exports = userRouter;
