const express = require("express");
const path = require("path");
const mainControllers = require("../controllers/mainControllers");
const mainRouter = express.Router();


mainRouter.get("/", mainControllers.showHome);
    
mainRouter.get("/registro" ,mainControllers.showRegister);
    
mainRouter.get("/login", mainControllers.showLogin);
    
//mainRouter.get("/detalle-producto.html", mainControllers.showDetalleProduc);
    
//mainRouter.get("/carrito-de-compras.html", mainControllers.showCarrito);
    
//mainRouter.get("/formulario-producto", mainControllers.showFormularioProduc);
       
module.exports = mainRouter;

