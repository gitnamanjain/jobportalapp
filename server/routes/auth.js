import express from "express"
import mongoose from "mongoose";
import jwt from "jsonwebtoken"
const router = express.Router();
import bcrypt from "bcrypt";
import User from "../models/user.js";
async function comparePassword(plaintextPassword, hash) {
    const result = await bcrypt.compare(plaintextPassword, hash);
    return result
}
const maxAge = 1 * 24 * 60 * 60;
const createToken = (id) => {
    return jwt.sign({ id }, "super_secret_key", {
        expiresIn: maxAge
    })
}
router.post('/login', async function (req, res) {
    const { email, password } = req.body;
    await User.findOne({ email: email }, (err, user) => {
        const token = createToken(user.email)
        res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); res.cookie(("jwt"), token, { httpOnly: false, maxAge: maxAge * 1000 }, { sameSite: 'none' });
        comparePassword(password, user.password).then(result => res.send(user))
    }

    )
    res.end
});

router.post("/register", async (req, res) => {
    const { name, email, password, user_id, saved_jobs, applied_job, my_reviews } = req.body;
    let hashedPassword = await bcrypt.hash(password, 10);
    User.findOne({ email: email }, (err, user) => {
        if (user) {
            res.send({ message: "User already registerd" })
        } else {

            const user = new User({
                name,
                email,
                password: hashedPassword,
                user_id,
                saved_jobs,
                applied_job,
                my_reviews
            })

            user.save(err => {
                if (err) {
                    res.send(err)
                } else {
                    res.send({ message: "Successfully Registered, Please login now." })
                }
            })
        }
    })

})
export default router;