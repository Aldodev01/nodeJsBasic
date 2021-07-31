// IMPORT PACKAGE YANG SUDAH KITA INSTALL

var express = require('express')
var cors = require('cors')
var app = express()


// REQUEST METHOD
app.get( '/' , (req, res)=>{
    res.send(`
    <h1>Hello World</h1>
    `)
} )

// JALANKAN SERVERNYA
app.listen( 7000 , ()=>{
    console.log('Server ini Berjalan di port 7000...')
} )