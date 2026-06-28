import jwt from "jsonwebtoken"
const getToken = async (userId)=>{
    try {
        const token = await jwt.sign({userId},process.env.JWTSECRET,{expiresIn:"7d"})
        return token
    } catch (error) {
        console.log("token gen error",error)
    }
    
}

export default getToken