const express = require("express");

const router = express.Router()
const auth = require("../middleware/auth");

const notificationController = require('../controllers/notificationController')

router.get("/getMyNotification/:n_type",auth, notificationController.getMyNotifications)

router.get("/ping/:userRefId",notificationController.pingUserByRefId)
module.exports = router;