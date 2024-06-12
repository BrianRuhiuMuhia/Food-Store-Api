import express,{Request,Response,NextFunction} from "express"
const router=express.Router()
router.get("/",(req:Request,res:Response):Response=>{
return res.json("Admin Route")
})
export {router as AdminRouter}