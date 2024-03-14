const express = require("express");
const aisleRouter = express.Router();
const { createAisle,
    getAllAisles,
    getAisleById,
    updateAisle,
    addAisleCover,
    deleteAisle, } = require("../controllers/aisle.controller");
const { upload, uploadToCloudinary } = require('../middlewares/file.middleware')
const { isAuth } = require('../middlewares/auth.middleware')

// Ruta para crear un nuevo álbum
aisleRouter.post("/", createAisle);
aisleRouter.get("/", getAllAisles);
aisleRouter.get("/:id", getAisleById);
aisleRouter.put("/:id", updateAisle);
aisleRouter.patch("/:id", updateAisle);
aisleRouter.delete("/:id", deleteAisle);

module.exports = aisleRouter;
