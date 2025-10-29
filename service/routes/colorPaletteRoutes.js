const express = require("express");
const {
  createColorPalette,
  getColorPalettes,
  getColorPaletteById,
  deleteColorPalette,
  updateColorPalette,
  getPublicColorPalettes,
} = require("../controllers/colorPalette");

const router = express.Router();

router.get("/public", getPublicColorPalettes);

router.post("/create", createColorPalette);
router.get("/", getColorPalettes);
router.get("/:id", getColorPaletteById);
router.put("/:id", updateColorPalette);
router.delete("/:id", deleteColorPalette);

module.exports = router;
