const express = require("express");
const trackRouter = express.Router();
const {
  createTrack,
  getAllTracks,
  getTrackById,
  updateTrack,
  deleteTrack,
} = require("../controllers/track.controller");
const { isAuth } = require('../middlewares/auth.middleware');

trackRouter.post("/", createTrack);
trackRouter.get("/", getAllTracks);
trackRouter.get("/:id", getTrackById);
trackRouter.patch("/:id", updateTrack);
trackRouter.delete("/:id", deleteTrack);

module.exports = trackRouter;
