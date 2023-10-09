const express = require("express");
const path = require("path");
const multer = require("multer");
const {body} = require("express-validator");
const usersControllers = require("../controllers/usersControllers");
const usersRouter = express.Router();


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/img/user");
    },
    filename: (req, file, cb) => {
      let nameFile = `user_${Date.now()}${path.extname(file.originalname)}`;
    cb(null, nameFile);
  },
  });

  const uploadFile = multer({ storage:storage });



 
//express validator
 const validations = [
  body("Email").exists().isEmail().withMessage("Ingrese un E-mail válido"),
 body("password").exists().isLength({max:8}).isNumeric().withMessage("Ingrese un valor numérico"),

]




usersRouter.get("/registro" ,usersControllers.showRegister);
usersRouter.post("/registro", uploadFile.single("img"), usersControllers.Registro)
  
usersRouter.post("/login",validations, usersControllers.showLogin);
    
       
module.exports = usersRouter;















































//const express = require("express");
//const userRouter = express.Router();

//configuración del multer
//const uploadFile = require("../middlewares/multerMiddleware");
//configuración de express validator
//const validations = require("../middlewares/validatorMiddleware");

//const userController = require("../controllers/usersController");

//formulario de registro
//router.get("/register", usersController.register);

//procesar registro
//router.post (
    //"/register",
    //uploadFile.single("avatar"),
    //validations,
  //  usersController.processResgister
//);