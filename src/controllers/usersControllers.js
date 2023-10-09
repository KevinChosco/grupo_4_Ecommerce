const path = require("path");
const fs = require("fs");
const {validationResult} = require("express-validator")

const usersFilePath = path.join(__dirname, "../data/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
//const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const usersControllers = {
  showRegister: (req, res) => {
    res.render("users/register");
  },
    Registro: (req, res) => {
      const data = req.body
      if (req.file) {

        var usarImage = req.file.filename

    } else {

        var usarImage = "avatar.png"

    } const nuevoUser = {

      id: users[users.length - 1].id + 1,

      name: data.name,

      fechaNacimiento: data.fechaNacimiento,

      telefono: parseInt(data.telefono),

      genero: data.genero,
      categoria: data.categoria,

      pass: req.body.password,
      correo: data.correo,
      imagen: usarImage,
      terminos:  data.terminos

  }



  users.push(nuevoUser);

  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, " "))
  res.redirect("/")

 
    },
    showLogin: (req, res) => {
        const resultValidation = validationResult(req);
        
        if (resultValidation.errors.length > 0){
                  res.render("users/login", {
                    errors:resultValidation.mapped(),
                    oldData: req.body,
                  });
        }else {
          const data = req.body;
          const login = users[users.length-1].id;
        }
    },
    
}
module.exports = usersControllers;

