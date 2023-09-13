const fs = require("fs");
const path = require("path");
const productsFilePath = path.join(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const productControllers = {
  
    index: (req, res) => {
        // Do the magic
    
        res.render("products", { products });
      },
    detail: (req, res) => {
        // Do the magic
        const id = req.params.id;
        const product = products.find((product) => product.id == id);
        res.render("products/detail", { product });
      },
    showCarrito: (req, res) => {
        res.render("carrito-de-compras");
    },
    showFormularioProduc: (req, res) => {
        res.render("products/formulario-producto");
    },
}
module.exports = productControllers;

