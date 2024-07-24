const { default: mongoose } = require("mongoose");
const Collections = require("../utils/Collections");

const AppUserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  isActive:{
    type:Boolean,
    default:true
  },
  createdOn: {
    type: Date,
    default: Date.now,
  }
});
AppUserSchema.method = {};

module.exports = UserModel = mongoose.model(Collections.APP_USER_MODAL, AppUserSchema);
