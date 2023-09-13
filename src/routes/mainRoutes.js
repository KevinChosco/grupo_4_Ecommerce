const express = require("express");
const path = require("path");
const mainControllers = require("../controllers/mainControllers");
const mainRouter = express.Router();


mainRouter.get("/", mainControllers.showHome);
    
// mainRouter.get("/registro" ,mainControllers.showRegister);
    
// mainRouter.get("/login", mainControllers.showLogin);
    
       
module.exports = mainRouter;

