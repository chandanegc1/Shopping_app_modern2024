import { User } from "../models/user.js";
export const newUser = async (req, res, next) => {
    try {
        const { name, email, photo, gender, role, _id, dob } = req.body;
        const user = await User.create({ name, email, photo, gender, role, _id, dob });
        res.status(200).json({
            success: true,
            message: `welcome, ${user}`
        });
    }
    catch (error) {
    }
};
