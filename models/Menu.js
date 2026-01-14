 const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema(
  {
    menuId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    title: {
      type: String,
      required: true, 
      trim: true,
    },
    path: {
      type: String,
      required: true, 
      trim: true,
    },
    icon: {
      type: String,
      default: "",
    },
    parentMenuId: {
      type: String,
      default: null, 
    },
    order: {
      type: Number,
      default: 0,
    },
    permissionKey: {
      type: String,
      default: "", 
    },



    
    isActive: {      
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Menu", menuSchema);
