const express = require("express");
const shelfRouter = express.Router();
const {
  createShelf,
  getAllShelves,
  getShelfById,
  updateShelf,
  deleteShelf,
} = require("../controllers/shelf.controller");
const { isAuth } = require('../middlewares/auth.middleware');

shelfRouter.post("/", createShelf);
shelfRouter.get("/", getAllShelves);
shelfRouter.get("/:id", getShelfById);
shelfRouter.patch("/:id", updateShelf);
shelfRouter.delete("/:id", deleteShelf);

module.exports = shelfRouter;
