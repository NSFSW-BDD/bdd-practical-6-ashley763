const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController.js");
const jwtMiddleware = require('../middlewares/jwtMiddleware.js');

router.get("/", userController.getAllUser);
router.get("/:id", userController.getUserById);
router.post('/', userController.createNewUser);
router.put('/:id', userController.updateUserById);
router.delete('/:id', userController.deleteUserById);
router.post("/login", userController.loginUser,jwtMiddleware.generateToken,jwtMiddleware.sendToken);

module.exports = router;