import jwt from "jsonwebtoken"

const isAuth = async (req,res,next)=>{
    try {
        const token = req.cookie("token")
        if(!token){
            res.status(400).json({
                message:"user does not have token"
            })
        }

        const veriftoken = jwt.verify(token,process.env.JWTSECRET)

        if(!veriftoken){
            res.status(400).json({
                message:"user does not have valid token"
            })
        }
        req.userid = veriftoken.userid

        next()
    } catch (error) {
        console.log("isauth error")
    }
}

export default isAuth;