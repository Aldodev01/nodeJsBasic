const express = require("express");
const cors = require("cors");
const app = express();

// * Middleware
app.use(cors())
app.use(express.json())

// TODO: 
app.get('/', (req, res) => {
    res.send("kamu berhasil terhubung")
})
// console.log(express)

// TODO: Response Json
app.get("/json", (req, res)=>{
    res.json({
        status : 200,
        message : "kamu berhasil konek ke server..."
    })
})

app.get("/userdata", (req, res)=>{
    res.json({
        username : "Aldo",
        email : "aldodevv@gmail.com",
        avatar : "https://picsum.photos/seed/34/200"
    })
})

// TODO : req params
app.get("/userdata/:username/:email/:address", (req, res) => {
    let name = req.params.username
    let email = req.params.email
    let address = req.params.address

    res.send(`
        username : ${name} </br>
        email : ${email} </br>
        address : ${address}
    `)
})

// TODO : req query
app.get("/barang/", (req, res) => {
    let nama = req.query.nama
    let qty = req.query.qty
    let price = req.query.price

    res.send(`
    <strong>TOKO UCOK</strong> </br>
    <h3>-____________________________________-</h3>
        nama barang : ${nama} </br>
        qty : ${qty} </br>
        price : ${price} </br>

    <strong>Terimakasih telah membobol toko kami</strong>
    `)
})

// TODO : Req body
app.post("/barang", (req, res) => {
    let nama = req.body.nama
    let qty = req.body.qty
    let price = req.body.price

    res.json({
        nama_barang : nama,
        quantity : qty,
        each_price : price,
        total_price : price * qty 
    })
})

// TODO : serve static file

app.use("/admin", express.static("public"))
// app.get("/admin", (req, res) => {
//     res.sendFile("index.html")
// })

app.listen(5000, ()=>{console.log("listen port 5000")})