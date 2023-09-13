const express = require("express");
const mainRouter = require("./routes/mainRoutes");
const productRouter = require("./routes/productRoutes");
const app = express()
const path = require("path")



const port = 8081;

app.use(express.static("public"));

app.use("/", mainRouter);
app.use("/products", productRouter);

app.set("view engine","ejs");
app.set("views", path.join(__dirname, "/views")); // Define la ubicación de la carpeta de las Vista

app.listen(port, () => console.log("servidor escuchando en el puerto",port))




