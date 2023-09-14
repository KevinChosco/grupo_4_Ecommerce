const express = require("express");
const path = require("path");
const multer = require("multer");
const productControllers = require("../controllers/productControllers");
const productRouter = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./public/img/products");
    },
    filename: (req, file, cb) => {
      const nameFile = `products_${Date.now()}${path.extname(file.originalname)}`;
      cb(null, nameFile);
    },
  });

  const uploadFile = multer({ storage });

//MOSTRAR DETALLE DE UN PRODUCTO
productRouter.get("/detail/:id", productControllers.detail);

//MOSTRAR TODOS LOS PRODUCTOS
productRouter.get("/", productControllers.index)

//EDITAR PRODUCTO
productRouter.get("/edit/:id", productControllers.edit)
productRouter.post("/edit/:id",uploadFile.single("img"), productControllers.update)

//CREAR PRODUCTO
productRouter.get("/create", productControllers.create)
productRouter.post("/", uploadFile.single("img"), productControllers.store)

//ELIMINAR PRODUCTO
productRouter.post("/delete/:id", productControllers.destroy)
   
productRouter.get("/carrito-de-compras.html", productControllers.showCarrito);
    
productRouter.get("/formulario-producto", productControllers.showFormularioProduc);
       
module.exports = productRouter;
