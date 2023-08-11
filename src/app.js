const express = require("express")
const app = express()
const path = require("path")

const port=process.env.PORT ?? 8080;

app.use(express.static("public"))

app.listen(port, () => console.log("servidor escuchando en el puerto",port))

app.get("/",(req,res)=>{
res.sendFile(path.join(__dirname,"/views/home.html"))
})

app.get("/registro",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/register.html"))
    })

app.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/login.html"))
    })

app.get("/detalle-producto.html",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/detalle-producto.html"))
    })

app.get("/carrito-de-compras.html",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/carrito-de-compras.html"))
    })
   