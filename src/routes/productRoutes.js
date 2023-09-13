const express = require("express");
const path = require("path");
const productControllers = require("../controllers/productControllers");
const productRouter = express.Router();

//MOSTRAR DETALLE DE UN PRODUCTO
productRouter.get("/detail/:id", productControllers.detail);

//MOSTRAR TODOS LOS PRODUCTOS
productRouter.get("/", productControllers.index)

//EDITAR PRODUCTO
productRouter.get("/edit/:id", productControllers.edit)
productRouter.post("/edit/:id", productControllers.update)

//CREAR PRODUCTO
productRouter.get("/create", productControllers.create)
// productRouter.post("/create", productControllers)

//ELIMINAR PRODUCTO
productRouter.post("/delete/:id", productControllers.destroy)
   
productRouter.get("/carrito-de-compras.html", productControllers.showCarrito);
    
productRouter.get("/formulario-producto", productControllers.showFormularioProduc);
       
module.exports = productRouter;
