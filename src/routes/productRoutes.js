const express = require("express");
const path = require("path");
const productControllers = require("../controllers/productControllers");
const productRouter = express.Router();

productRouter.get("/detail/:id", productControllers.detail);

productRouter.get("/", productControllers.index)

productRouter.get("/edit/:id", productControllers.edit)

productRouter.post("/edit/:id", productControllers.update)

productRouter.post("/delete/:id", productControllers.destroy)

// productRouter.get("/detail", productControllers.showDetail);

// productRouter.get("/detalle-producto.html", productControllers.showDetalleProduc);
    
productRouter.get("/carrito-de-compras.html", productControllers.showCarrito);
    
productRouter.get("/formulario-producto", productControllers.showFormularioProduc);
       
module.exports = productRouter;
