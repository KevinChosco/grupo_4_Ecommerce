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
    create: (req, res) => {
      // Do the magic
      res.render("products/formulario-producto");
    },
    edit: (req, res) => {
      const id = req.params.id;
      const product = products.find((product) => product.id == id);
      res.render("products/formulario-producto", { productToEdit: product });
    },
    update: (req, res) => {
      // Do the magic
      const id = req.params.id;
      const editProduct = req.body;
      const index = products.findIndex((product) => product.id == id);
  
      products[index].name = editProduct.name;
      products[index].price = editProduct.price;
      products[index].discount = editProduct.discount;
      products[index].category = !editProduct.category
        ? products[index].category
        : editProduct.category;
      products[index].description = editProduct.description;
  
      fs.writeFileSync(productsFilePath, JSON.stringify(products));
  
      res.redirect("/");
    },
    destroy: (req,res) =>{
      res.send("producto elminado")
    },
    showCarrito: (req, res) => {
        res.render("carrito-de-compras");
    },
    showFormularioProduc: (req, res) => {
        res.render("products/formulario-producto");
    },
}
module.exports = productControllers;

