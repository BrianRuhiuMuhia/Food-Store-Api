import express,{Request,Response,NextFunction} from "express"
import {createVendor,getVendors,getVendorById} from "../controllers"
const router=express.Router()
router.post("/vendor",createVendor)
router.get("/vendors",getVendors)
router.get("/vendor/:id",getVendorById)
export {router as AdminRouter}