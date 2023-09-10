const express = require("express");
const mainRouter = require("./routes/mainRoutes");
const productRouter = require("./routes/productRoutes");
const app = express()



const port = 8081;

app.use(express.static("public"));

app.use("/", mainRouter);
app.use("/", productRouter);

app.set("view engine","ejs");
app.set("views", "./src/views");

app.listen(port, () => console.log("servidor escuchando en el puerto",port))




