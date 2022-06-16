import express from "express";
import mongoose from "mongoose";
import User from "./models/user.js";
import authRoute from "./routes/auth.js";
import jobsRoute from "./routes/jobs.js";
import cors from "cors"

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors({ origin: true, credentials: true }));



//mongodb connect
mongoose.connect("mongodb://localhost:27017/myLoginRegisterDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})

app.use("/", authRoute)
app.use("/", jobsRoute)

app.listen(9002, () => {
    console.log("BE started at port 9002")
})
