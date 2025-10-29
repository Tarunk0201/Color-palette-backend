const mongoose = require("mongoose");

const colorPaletteSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    isPublic: {
      type: Boolean,
      default: false,
    },
    background: {
      light: [String], 
      dark: [String], 
      description: String,
    },
    border: {
      light: [String], 
      dark: [String], 
      description: String,
    },
    primaryColor: {
      light: [String], 
      dark: [String], 
      description: String,
    },
    text: {
      light: [String], 
      dark: [String], 
      description: String,
    },
    popups: {
      danger: String, 
      warning: String, 
      success: String, 
      info: String, 
      description: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ColorPalette", colorPaletteSchema);
