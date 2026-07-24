import express from "express"
import cookieParser from "cookie-parser"
import helmet from "helmet"
import { rateLimit } from 'express-rate-limit'
import authRoutes from "./src/routes/authRoutes.js"
import { connectDb } from "./src/db/db.js"
// import userRoutes from "./src/routes/userRoute.js"
import { errorMiddleware } from "./src/middleware/errorMiddleware.js"
import { User } from "./src/models/user.js"
// import jobRoute from "./src/routes/jobRoutes.js"
import { createClient } from "redis";
import dotenv from 'dotenv'


dotenv.config()



const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(helmet())

const limiter = rateLimit({
	windowMs: 60 * 1000, // 15 minutes
	max: 5, 
	message : "too many request"
	
})

const redisClient = createClient({
    url: process.env.REDIS_URL
});

redisClient.on("error", (err) => {
    console.error("Redis Error:", err);
});

(async () => {
    await redisClient.connect();
    console.log("redis connected!");
    
})();

// Apply the rate limiting middleware to all requests.
app.use(limiter)

const PORT = process.env.PORT || 6500


app.get("/",(req, res) => {
    res.send("hello from the server!")
})




app.use("/api/auth", authRoutes)

app.put("/api/users", (req, res) => {
    redisClient.del("users")

    return res.status(200).json({
        status:true,
        message:"user updated successfully!"
    }

    )
})
app.get("/api/users", async (req, res) => {

    const cacheKey = `users`;

    const redisData = await redisClient.get(cacheKey);

    if(!redisData){
        const users = await User.find()

        redisClient.set(cacheKey, JSON.stringify(users), { EX: 864000 })

    return res.status(200).json({
        status:true,
        data: users,
        message:"users data agiya..."
    })

    }else{
        return res.status(200).json({
            status: true,
            message:"data leaya hon..",
            data : JSON.parse(redisData)
        })
    }

    console.log(users);
    
   
})
// app.use("/api/user", userRoutes)
// app.use("/api/job", jobRoute)
// app.use("/api/user")



app.use(errorMiddleware)

app.listen(PORT, () => {
    console.log(`server is listenin.. ${PORT}`)
    connectDb()
})