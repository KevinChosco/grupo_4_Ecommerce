const express = require("express");
const mainRouter = require("./routes/mainRoutes");
const productRouter = require("./routes/productRoutes");
const app = express()
const path = require("path")
const methodOverride = require("method-override"); // Pasar poder usar los métodos PUT y DELETE


const port = 8081;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use("/", mainRouter);
app.use("/products", productRouter);

// app.use(express.static(path.join(__dirname, "../public"))); // Necesario para los archivos estáticos en el folder /public

// app.use(logger("dev"));
app.use(express.json());
// app.use(cookieParser());
app.use(methodOverride("_method")); 



app.set("view engine","ejs");
app.set("views", path.join(__dirname, "/views")); // Define la ubicación de la carpeta de las Vista

app.listen(port, () => console.log("servidor escuchando en el puerto",port))




