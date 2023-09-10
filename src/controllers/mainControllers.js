const path = require("path");

const mainControllers = {
    showHome: (req, res) => {
        res.render("home");
    },
    showRegister: (req, res) => {
        res.render("users/register");
    },
    showLogin: (req, res) => {
        res.render("users/login");
    },
    
}
module.exports = mainControllers;