const Track = require("../models/track.model");
const { HTTPSTATUSCODE } = require("../../utils/httpStatusCode");

const createTrack = async (req, res, next) => {
  try {
    const track = await Track.create(req.body);
    res.status(201).json({
      status: 201,
      message: HTTPSTATUSCODE[201],
      data: track,
    });
  } catch (error) {
    next(error);
  }
};

const getAllTracks = async (req, res, next) => {
  try {
    const tracks = await Track.find().populate('album');
    res.status(200).json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: tracks,
    });
  } catch (error) {
    next(error);
  }
};

const getTrackById = async (req, res, next) => {
  try {
    const track = await Track.findById(req.params.id).populate('album');
    if (track) {
      res.status(200).json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: track,
      });
    } else {
      res.status(404).json({ status: 404, message: "Track not found" });
    }
  } catch (error) {
    next(error);
  }
};

const updateTrack = async (req, res, next) => {
  try {
    const track = await Track.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (track) {
      res.status(200).json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: track,
      });
    } else {
      res.status(404).json({ status: 404, message: "Track not found" });
    }
  } catch (error) {
    next(error);
  }
};

const deleteTrack = async (req, res, next) => {
  try {
    const track = await Track.findByIdAndDelete(req.params.id);
    if (track) {
      res.status(204).json({ status: 204, message: "Track deleted" });
    } else {
      res.status(404).json({ status: 404, message: "Track not found" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createTrack,
  getAllTracks,
  getTrackById,
  updateTrack,
  deleteTrack,
};
