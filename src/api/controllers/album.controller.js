const Album = require("../models/album.model");
const { HTTPSTATUSCODE } = require("../../utils/httpStatusCode");

const createAlbum = async (req, res, next) => {
  try {
    //const album = await Album.create(req.body);
    const { title, artist, releaseYear, genre } = req.body;
    const coverImage = req.file ? req.file.path : '';
    const album = await Album.create({
      title,
      artist,
      releaseYear,
      genre,
      coverImage
    });
    res.status(201).json({
      status: 201,
      message: HTTPSTATUSCODE[201],
      data: album,
    });
  } catch (error) {
    next(error);
  }
};

const getAllAlbums = async (req, res, next) => {
  try {
    const albums = await Album.find();
    res.status(200).json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: albums,
    });
  } catch (error) {
    next(error);
  }
};

const getAlbumById = async (req, res, next) => {
  try {
    const album = await Album.findById(req.params.id);
    if (album) {
      res.status(200).json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: album,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: HTTPSTATUSCODE[404],
      });
    }
  } catch (error) {
    next(error);
  }
};

const updateAlbum = async (req, res, next) => {
  try {
    const album = await Album.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (album) {
      res.status(200).json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: album,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: HTTPSTATUSCODE[404],
      });
    }
  } catch (error) {
    next(error);
  }
};

const addAlbumCover = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        status: 400,
        message: 'No file in the request.'
      });
    }
    const album = await Album.findByIdAndUpdate(
      req.params.id,
      { coverImage: req.file.path },
      { new: true }
    );

    if (album) {
      res.status(200).json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: album,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: HTTPSTATUSCODE[404],
      });
    }
  } catch (error) {
    next(error);
  }
};

const deleteAlbum = async (req, res, next) => {
  try {
    const album = await Album.findByIdAndDelete(req.params.id);
    if (album) {
      res.status(204).json({
        status: 204,
        message: HTTPSTATUSCODE[204],
      });
    } else {
      res.status(404).json({
        status: 404,
        message: HTTPSTATUSCODE[404],
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createAlbum,
  getAllAlbums,
  getAlbumById,
  updateAlbum,
  addAlbumCover,
  deleteAlbum,
};
