import express from "express"
import bodyParser from "body-parser"
import { VendorRouter,AdminRouter } from "./routes"
const app=express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use("/vendor",VendorRouter)
app.use("/admin",AdminRouter)
app.listen(5000,()=>{
    console.log("Server is running on port 5000")
})