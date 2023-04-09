const loginSchema = require("../modul/LoginSchema")
module.exports = {
    
  signUP : async(req,res) => {
    const user = new loginSchema({
        username:req.body.username,
        password:req.body.password,
        role:req.body.role
    })
    try{
        const a1 = await user.save()
        if(a1) {
            res.status(200).json({ message: " created" , data: a1})
        }else{
            res.status(500).json({ message: "not created "})
        }
    }catch (err) {
        res.status(500).json({ message: "Error " })
    }
  }  
}