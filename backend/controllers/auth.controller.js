import User from "../models/user.js";
import bcrypt from "bcrypt";

export const signUp = async (req, res) => {
    const { username, emailId, password } = req.body;

    if (!username || !emailId || !password || username === "" || emailId === "" || password === "") {
        return res.status(400).json("Invalid details !!");
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
        return res.status(500).json({ message: err.message });
    }
};
