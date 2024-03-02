const express = require("express");
const { Login, Register, Logout, Profile, People, SingleUserMessage } = require("../controllers/user");

const userRouter = express.Router();


userRouter.get("/messages/:userId",SingleUserMessage);

userRouter.get("/people",People);

userRouter.get("/profile",Profile);

userRouter.post("/login", Login);

userRouter.post("/logout",Logout);

userRouter.post("/register", Register);

module.exports = userRouter;