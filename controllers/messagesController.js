const MessagesModal = require("../models/MessagesModal");
const { GetObjectID } = require("../utils/utilities");

exports.deleteMessageByID = async (req, res) => {
  try {
    const messageId = req.params.messageId
    const userId = req.userId;
    await MessagesModal.findOneAndDelete({ _id: GetObjectID(messageId), author: GetObjectID(userId) }).exec()
    return res.success("Success", "Success");
  } catch (error) {
    return res.error("Error occurred while creating user", error.message);
  }
}

exports.togglePinMessage = async (req, res) => {
  try {
    const messageId = req.params.messageId
    const pin = req.params.type === 'pin' ? true : false
    const userId = req.userId;
    await MessagesModal.findByIdAndUpdate(GetObjectID(messageId), { isPinned: pin, pinnedBy: GetObjectID(userId), pinnedAt: Date.now() }).exec()
    return res.success("Success", "Success");
  } catch (error) {
    return res.error("Error occurred while creating user", error.message);
  }
}


