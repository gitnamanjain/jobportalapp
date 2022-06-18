import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import User from "./models/user.js";
import authRoute from "./routes/auth.js";
import jobsRoute from "./routes/jobs.js";

//middleware
const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())


//mongodb connect
mongoose.connect("mongodb://localhost:27017/myLoginRegisterDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})



app.use("/", authRoute)
app.use("/", jobsRoute)


// app.patch("/users/saved_jobs", (req, res) => {

//     const { user_id, saved_jobs } = req.body;
//     User.findOneAndUpdate({ user_id: user_id },

//         {
//             $set: {
//                 saved_jobs: saved_jobs
//             }
//         }
//     )
//         .then((res) => {
//             console.log("patch sucessfull");
//         })
//         .catch(err => console.log("patch error"))

// })


// app.patch("/users/applied_jobs", (req, res) => {

//     const { user_id, saved_jobs, applied_job } = req.body;
//     User.findOneAndUpdate({ user_id: user_id },

//         {
//             $set: {
//                 applied_job: applied_job
//             }
//         }
//     )
//         .then((res) => {
//             console.log("Applied job updated..!!!");
//         })
//         .catch(err => console.log("Applied job Error..!!"))

// })


app.listen(9002, () => {
    console.log("BE started at port 9002")
})
