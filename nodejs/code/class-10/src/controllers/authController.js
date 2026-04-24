import { User } from "../models/userSchema.js";
import jwt from 'jsonwebtoken';


const login = async (req, res, next) => {
  try {
    const {email, password} = req.body;

  if(!email || !password) throw new Error("All fields are required!")

   let myUser = await User.findOne({email : email})
   console.log(myUser)

   if(!myUser) throw new Error("User not found")

    if(myUser.password != password) throw new Error("Invalid credientials")

   const token = jwt.sign({email : myUser.email, id : myUser._id}, process.env.JWT_SECRET_KEY)

  res.status(200).json({
    status: true,
    message: "User logged Successfully",
    token : token
  });

  } catch (error) {
    next(error)
  }
};

const signup = async (req, res, next) => {
  

  // if(true){
  //   throw "hunain nhi hai"
  // }else {
  //   throw "error ayaaa"
  // }
  try {
    console.log(req.body);

    let user ;
    const { age, email, password, userName } = req.body;

if(!user) throw new Error("user nhi hai...")
    // if (!firstName || !lastName || !email || !password || !userName)
    //   return res.json({
    //     status: false,
    //     message: "All Fields are required!",
    //   });

    await User.create(req.body);

    res.status(200).json({
      status: true,
      message: "User Signup  Successfully",
    });
  } catch (error) {
    next(error)
  }
};



export { signup, login };
