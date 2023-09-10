const path = require("path");

const productControllers = {
    showDetalleProduc: (req, res) => {
        res.render("products/detalle-producto");
    },
    showCarrito: (req, res) => {
        res.render("carrito-de-compras");
    },
    showFormularioProduc: (req, res) => {
        res.render("products/formulario-producto");
    },
}
module.exports = productControllers;

