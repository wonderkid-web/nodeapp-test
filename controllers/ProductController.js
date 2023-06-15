import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const getProduct = async (req,res) =>{
    try{
        const data = await prisma.buku.findMany()
        res.status(200).json(data)
    }catch(e){
        res.status(400).json({"msg": e.message})
    }
}