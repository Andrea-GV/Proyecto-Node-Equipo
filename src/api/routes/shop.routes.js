const express = require("express");
const shopRouter = express.Router();
const {
  createShop,
  getAllShops,
  getShopById,
  updateShop,
  deleteShop,
} = require("../controllers/shop.controller");
const { isAuth } = require('../middlewares/auth.middleware');

shopRouter.post("/", createShop);
shopRouter.get("/", getAllShops);
shopRouter.get("/:id", getShopById);
shopRouter.patch("/:id", updateShop);
shopRouter.delete("/:id", deleteShop);

module.exports = shopRouter;
