const express = require("express")
const app = express()
const path = require("path")

const port = 8081;

app.use(express.static("public"))

app.listen(port, () => console.log("servidor escuchando en el puerto",port))

app.set("view engine","ejs")
app.set("views", "src/views")

app.get("/",(req,res)=>{
res.render("home")
})

app.get("/registro",(req,res)=>{
    res.render("register")
    })

app.get("/login",(req,res)=>{
    res.render("login")
    })

app.get("/detalle-producto.html",(req,res)=>{
    res.render("detalle-producto")
    })

app.get("/carrito-de-compras.html",(req,res)=>{
    res.render("carrito-de-compras")
    })
   