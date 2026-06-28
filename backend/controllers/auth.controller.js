import getToken from "../config/token.js";
import User from "../models/user.model.js";

export const googleAuth = async (req, res) => {
  try {
    const { name, email } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({
        name,
        email,
      });
    }

    const token = await getToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // true in production (HTTPS)
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({
      message: `google auth error: ${error.message}`,
    });
  }
};

export const logOut = async (req,res)=>{
    try {
        await res.clearCookie("token")
        return res.status(200).json({
            message:"logout successfully"
        })
    } catch (error) {
        return res.status(500).json({
            message:`logout error:${error}`
        })
    }
}