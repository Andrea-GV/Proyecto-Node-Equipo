const Producto = require("../models/producto.model");
const { HTTPSTATUSCODE } = require("../../utils/httpStatusCode");

const createProducto = async (req, res, next) => {
  try {
    const producto = await Producto.create(req.body);
    res.status(201).json({
      status: 201,
      message: HTTPSTATUSCODE[201],
      data: producto,
    });
  } catch (error) {
    next(error);
  }
};

const getAllProductos = async (req, res, next) => {
  try {
    const productos = await Producto.find().populate('shelf');
    res.status(200).json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: productos,
    });
  } catch (error) {
    next(error);
  }
};

const getProductoById = async (req, res, next) => {
  try {
    const producto = await Producto.findById(req.params.id).populate('shelf');
    if (producto) {
      res.status(200).json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: producto,
      });
    } else {
      res.status(404).json({ status: 404, message: "Producto not found" });
    }
  } catch (error) {
    next(error);
  }
};

const updateProducto = async (req, res, next) => {
  try {
    const producto = await Producto.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (producto) {
      res.status(200).json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: producto,
      });
    } else {
      res.status(404).json({ status: 404, message: "Producto not found" });
    }
  } catch (error) {
    next(error);
  }
};

const deleteProducto = async (req, res, next) => {
  try {
    const producto = await Producto.findByIdAndDelete(req.params.id);
    if (producto) {
      res.status(204).json({ status: 204, message: "Producto deleted" });
    } else {
      res.status(404).json({ status: 404, message: "Producto not found" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createProducto,
  getAllProductos,
  getProductoById,
  updateProducto,
  deleteProducto,
};
