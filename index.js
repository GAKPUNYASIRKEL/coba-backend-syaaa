const express = require('express');
const cors= require("cors")
const app = express();
const port = 82;

app.use(cors());
app.use(express.json());

app.get("/sensor1", (req,res)=>{
    res.send({sensor:[{tanggal:"25-Agustus-2004", suhu:"28", lokasi:"surabaya", kondisi:"panas"},{tanggal:"17-Agustus-1945", suhu:"30", lokasi:"Liyue", kondisi:"b ajah"},{tanggal:"10-Oktober-2010", suhu:"32", lokasi:"bangkalan", kondisi:"iyah"}]})
})

app.listen(port , () =>{
    console.log(`sedang berjalan di http://localhost:${port}`)
})