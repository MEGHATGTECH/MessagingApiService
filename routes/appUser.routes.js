const express = require("express");

const router = express.Router()


const appUserController = require('../controllers/appUserController')

router.post("/login", appUserController.userLogin)
router.post("/registerUser", appUserController.registerUser)
router.get("/getUserList", appUserController.getUserList)

module.exports = router;