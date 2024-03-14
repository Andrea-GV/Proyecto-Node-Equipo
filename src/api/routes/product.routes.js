const express = require("express");
const productRouter = express.Router();
const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  addProductCover,
  deleteProduct,
} = require("../controllers/product.controller");
const {
  upload,
  uploadToCloudinary,
} = require("../middlewares/file.middleware");
const { isAuth } = require("../middlewares/auth.middleware");


productRouter.post("/", createProduct);
productRouter.get("/", getAllProducts);
productRouter.get("/:id", getProductById);
productRouter.patch("/:id", updateProduct);
productRouter.delete("/:id", deleteProduct);
productRouter.patch("/photo/:id", [upload.single("photoImage"), uploadToCloudinary], addProductCover);

module.exports = productRouter;
