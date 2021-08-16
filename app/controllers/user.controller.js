const user=require("../models/user.model")

// Signin
exports.login = async (req, res, next) => {  

    try {
        const {username,password}=req.body;        
        const result =await user.login(username,password)
        res.status(200).json(
            result.output
        )        
    } catch (error) {
        next(error)
    }
    
};