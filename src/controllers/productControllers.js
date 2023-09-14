const fs = require("fs");
const path = require("path");
  
const productsFilePath = path.join(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

// const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


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
      res.render("products/formulario-producto-crear");
    },
    store: (req, res) => {
      
      // Do the magic
      const data = req.body;
      const file = req.file;
      console.log(data)
      const index = products[products.length - 1].id;
      
      const newProduct = {
        id: index + 1,
        name: data.name,
        price: data.price,
        img: file.filename,
        color: data.color,
        talla: data.talla,
      // description: data.description,
        
        
      };
      products.push(newProduct);
      fs.writeFileSync(productsFilePath, JSON.stringify(products,null,4));
      console.log(index)
       
      res.redirect("/products");
  
    },
    edit: (req, res) => {
      const id = req.params.id;
      const product = products.find((product) => product.id == id);
      res.render("products/formulario-producto", { productToEdit: product });
    },
    update: (req, res) => {
      // Do the magic
      const id = req.params.id;
      const file = req.file;
      const editProduct = req.body;
      const index = products.findIndex((product) => product.id == id);
  
      products[index].name = editProduct.name;
      products[index].price = editProduct.price;
      products[index].img = file.filename;
      products[index].talla = editProduct.talla;
      products[index].color = editProduct.color
        // ? products[index].category
        // : editProduct.category;
      // products[index].description = editProduct.description;
  
      fs.writeFileSync(productsFilePath, JSON.stringify(products,null,4));
  
      res.redirect("/products");
    },
    destroy: (req,res) =>{
      const id = req.params.id;

      const leftProducts = products.filter((product) => product.id != id);
      fs.writeFileSync(productsFilePath, JSON.stringify(leftProducts));
  
      res.redirect("/products");
    },
    showCarrito: (req, res) => {
        res.render("carrito-de-compras");
    },
    showFormularioProduc: (req, res) => {
        res.render("products/formulario-producto");
    },
}
module.exports = productControllers;

