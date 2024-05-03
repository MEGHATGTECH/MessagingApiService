const express = require("express");

const router = express.Router()
const auth = require("../middleware/auth");

const messageController = require('../controllers/messagesController')

router.delete("/:messageId",auth, messageController.deleteMessageByID)
module.exports = router;