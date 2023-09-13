const path = require("path");
const fs = require("fs");

const productsFilePath = path.join(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const mainControllers = {
    showHome: (req, res) => {
        res.render("home" , {products});
    },
    showRegister: (req, res) => {
        res.render("users/register");
    },
    showLogin: (req, res) => {
        res.render("users/login");
    },
    
}
module.exports = mainControllers;