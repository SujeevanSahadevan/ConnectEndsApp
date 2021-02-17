const express =require('express');
const router = express.Router();


router.get('/',(req,res,next)=>{
    res.send("Server is working propoerly")
});

module.exports=router;