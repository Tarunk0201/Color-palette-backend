const ColorPalette = require("../models/ColorPalette");
const jwt = require("jsonwebtoken");

const createColorPalette = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.id;

    const {
      name,
      description,
      isPublic,
      background,
      border,
      primaryColor,
      text,
      popups,
    } = req.body;

    const colorPalette = new ColorPalette({
      userId,
      name,
      description,
      isPublic,
      background,
      border,
      primaryColor,
      text,
      popups,
    });

    await colorPalette.save();

    res
      .status(201)
      .json({ message: "Color palette created successfully", colorPalette });
  } catch (error) {
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Invalid token" });
    }
    res.status(500).json({ message: "Server error" });
  }
};

const getColorPalettes = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.id;

    const { id } = req.query;

    if (id) {
      const colorPalette = await ColorPalette.findOne({ _id: id, userId });
      if (!colorPalette) {
        return res.status(404).json({ message: "Color palette not found" });
      }
      return res.json(colorPalette);
    } else {
      const colorPalettes = await ColorPalette.find({ userId });
      res.json(colorPalettes);
    }
  } catch (error) {
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Invalid token" });
    }
    res.status(500).json({ message: "Server error" });
  }
};

const getColorPaletteById = async (req, res) => {
  try {
    const { id } = req.params;

    const colorPalette = await ColorPalette.findById(id);
    if (!colorPalette) {
      return res.status(404).json({ message: "Color palette not found" });
    }

    if (colorPalette.isPublic) {
      return res.json(colorPalette);
    } else {
      const token = req.headers.authorization?.split(" ")[1];
      if (!token) {
        return res.status(401).json({ message: "No token provided" });
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const userId = decoded.id;

      if (colorPalette.userId.toString() !== userId) {
        return res.status(403).json({ message: "Access denied" });
      }

      res.json(colorPalette);
    }
  } catch (error) {
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Invalid token" });
    }
    res.status(500).json({ message: "Server error" });
  }
};

const deleteColorPalette = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.id;

    const { id } = req.params;

    const colorPalette = await ColorPalette.findOne({ _id: id, userId });
    if (!colorPalette) {
      return res.status(404).json({ message: "Color palette not found" });
    }

    await ColorPalette.findByIdAndDelete(id);

    res.json({ message: "Color palette deleted successfully" });
  } catch (error) {
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Invalid token" });
    }
    res.status(500).json({ message: "Server error" });
  }
};

const updateColorPalette = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.id;

    const { id } = req.params;

    const colorPalette = await ColorPalette.findOne({ _id: id, userId });
    if (!colorPalette) {
      return res.status(404).json({ message: "Color palette not found" });
    }

    const {
      name,
      description,
      isPublic,
      background,
      border,
      primaryColor,
      text,
      popups,
    } = req.body;

    if (name !== undefined) colorPalette.name = name;
    if (description !== undefined) colorPalette.description = description;
    if (isPublic !== undefined) colorPalette.isPublic = isPublic;
    if (background !== undefined) colorPalette.background = background;
    if (border !== undefined) colorPalette.border = border;
    if (primaryColor !== undefined) colorPalette.primaryColor = primaryColor;
    if (text !== undefined) colorPalette.text = text;
    if (popups !== undefined) colorPalette.popups = popups;

    await colorPalette.save();

    res.json({ message: "Color palette updated successfully", colorPalette });
  } catch (error) {
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Invalid token" });
    }
    res.status(500).json({ message: "Server error" });
  }
};

const getPublicColorPalettes = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    jwt.verify(token, process.env.JWT_SECRET);

    const publicColorPalettes = await ColorPalette.find({ isPublic: true });

    res.json(publicColorPalettes);
  } catch (error) {
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Invalid token" });
    }
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  createColorPalette,
  getColorPalettes,
  getColorPaletteById,
  deleteColorPalette,
  updateColorPalette,
  getPublicColorPalettes,
};
