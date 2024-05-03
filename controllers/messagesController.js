const MessagesModal = require("../models/MessagesModal");
const { GetObjectID } = require("../utils/utilities");

exports.deleteMessageByID = async (req, res) => {
    try {
       const messageId =req.params.messageId
       const userId = req.userId;
       await MessagesModal.findOneAndDelete( { _id:GetObjectID(messageId),author:GetObjectID(userId) }).exec()
      return res.success("Success","Success");
    } catch (error) {
      return res.error("Error occurred while creating user", error.message);
    }
  }
  