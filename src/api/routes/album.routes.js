const express = require("express");
const albumRouter = express.Router();
const { createAlbum,
    getAllAlbums,
    getAlbumById,
    updateAlbum,
    addAlbumCover,
    deleteAlbum, } = require("../controllers/album.controller");
const { upload, uploadToCloudinary } = require('../middlewares/file.middleware')
const { isAuth } = require('../middlewares/auth.middleware')

// Ruta para crear un nuevo álbum
albumRouter.post("/", [upload.single('coverImage')], createAlbum);
albumRouter.get("/", getAllAlbums);
albumRouter.get("/:id", getAlbumById);
albumRouter.put("/:id", updateAlbum);
albumRouter.patch("/:id", updateAlbum);
albumRouter.patch("/cover/:id", [upload.single('coverImage'), uploadToCloudinary], addAlbumCover);
albumRouter.delete("/:id", deleteAlbum);

module.exports = albumRouter;
