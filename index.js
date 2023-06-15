const express = require('express')
const app = express()

app.use(express.json())

app.get('/mahasiswa', (req,res)=>{
    res.status(200).send({
        "KKG-MemberTeam" : [
            "Muhammad Wahyu Ramadhan",
            "Afif Najib",
            "Rifki Nurikhwan"
        ]
    })
})

app.listen('3001', ()=>{
    console.log('Your server is running on port 3001');
})