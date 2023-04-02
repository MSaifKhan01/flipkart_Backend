const express=require("express")
const adminRouter= express.Router()
// const {applianceModel}=require("../Models/note.model")
const jwt=require("jsonwebtoken")
const { applianceModel }=require("../Models/appliances.model")

adminRouter.get("/",async(req,res)=>{
   

    try {
        let data=await applianceModel.find(req.query)
        res.status(200).send(data)
    } catch (error) {
        console.log(error)
    }
})
adminRouter.get("/sort1",async(req,res)=>{
   

    try {
        let data=await applianceModel.find().sort({new_price:1})
        res.status(200).send(data)
    } catch (error) {
        console.log(error)
    }
})
adminRouter.get("/sort2",async(req,res)=>{
    

    try {
        let data=await applianceModel.find().sort({new_price:-1})
        res.status(200).send(data)
    } catch (error) {
        console.log(error)
    }
})
adminRouter.get("/sort3",async(req,res)=>{
   

    try {
        let data=await applianceModel.find().sort({description:1})
        res.status(200).send(data)
    } catch (error) {
        console.log(error)
    }
})

adminRouter.get("/sort4",async(req,res)=>{
   

    try {
        let data=await applianceModel.find().sort({description:-1})
        res.status(200).send(data)
    } catch (error) {
        console.log(error)
    }
})


adminRouter.delete("/delete/:Id", async (req, res) => {
    let  {Id } = req.params
    try {
        await NoteModel.findByIdAndDelete({ _id: Id })
        res.send({ "message": "Deleted succesfully" })
    } catch (error) {
        res.send({ "error": "some error occured while deleting" })
    }
})
// adminRouter.get("/sort4",async(req,res)=>{
   

//     try {
//         let data=await applianceModel.find().sort({description:-1})
//         res.status(200).send(data)
//     } catch (error) {
//         console.log(error)
//     }
// })

module.exports={
    adminRouter
}