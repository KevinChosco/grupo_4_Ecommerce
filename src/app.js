const express = require("express")
const app = express()
const path = require("path")

app.use(express.static("public"))

app.listen(3000, () => "servidor escuchando en el puerto 3000")

app.get("/",(req,res)=>{
res.sendFile(path.join(__dirname,"/views/home.html"))
})

app.get("/registro.html",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/formulario-registro.html"))
    })

app.get("/login.html",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/formulario-login.html"))
    })

app.get("/login.html",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/detalle-producto.html"))
    })

app.get("/login.html",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/carrito-de-compras.html"))
    })
   