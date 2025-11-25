import User from "../models/user.js";
import bcrypt from "bcrypt";
import { errorHandler } from "../utils/errorHandler.js";

export const signUp = async (req, res,next) => {
    const { username, emailId, password } = req.body;

    if (!username || !emailId || !password || username === "" || emailId === "" || password === "") {
        return next(errorHandler(400, "Invalid input field values !!"));
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            username,
            emailId,
            password: hashedPassword
        });
        const savedUser = await user.save();
        return res.json({ message: "Signup Successful !!", data: savedUser });
    }
    catch (err) {
        return next(err);
    }
};
