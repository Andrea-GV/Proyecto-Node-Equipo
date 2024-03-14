const express = require("express");
const shopRouter = express.Router();
const {
  createShop,
  getAllShops,
  getShopById,
  updateShop,
  addShopCover,
  deleteShop,
} = require("../controllers/shop.controller");
const {
  upload,
  uploadToCloudinary,
} = require("../middlewares/file.middleware");
const { isAuth } = require("../middlewares/auth.middleware");

shopRouter.post("/", [upload.single("logoImage"), uploadToCloudinary], createShop);
shopRouter.get("/", getAllShops);
shopRouter.get("/:id", getShopById);
shopRouter.patch("/:id", updateShop);
shopRouter.delete("/:id", deleteShop);
shopRouter.patch("/logo/:id", [upload.single("logoImage"), uploadToCloudinary], addShopCover);

module.exports = shopRouter;
