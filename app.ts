import express from "express"
import { VendorRouter,AdminRouter } from "./routes"
const app=express()
app.use("/vendor",VendorRouter)
app.use("/admin",AdminRouter)
app.listen(5000,()=>{
    console.log("Server is running on port 5000")
})