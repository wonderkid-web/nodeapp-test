import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import ProductRoutes from "./routes/ProductRoutes.js"


dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(ProductRoutes)

app.get('/kkg', (req,res)=>{
    res.status(200).send({
        "KKG-MemberTeam" : [
            "Muhammad Wahyu Ramadhan",
            "Afif Najib",
            "Rifki Nurikhwan"
        ]
    })
})

app.listen(process.env.APP_PORT, ()=>{
    console.log(`Your server is running on port ${process.env.APP_PORT}`);
})