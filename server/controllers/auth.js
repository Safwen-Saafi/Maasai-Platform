import User from "../mongodb/models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const register = async (request, response) => {
    try {
        const {
            name,
            email,
            password,
            phone,
            profilePicture,
            role,
            address
        } = request.body;

        // Hash the password
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        // Create a new user
        const newUser = new User({
            name,
            email,
            password : passwordHash,
            phone,
            profilePicture,
            role,
            address

        });
        const savedUser = await newUser.save();
        response.status(201).json(savedUser);
    } catch (error) {
        response.status(500).json({
            error: error.message,
        });
    }
};

const login = async (request, response) => {
    try {
        const { email, password } = request.body;
        const user = await User.findOne({ email: email });
        if (!user) {
            return response.status(404).json({
                message: 'User does not exist.',
            });
        }

        const isMatched = await bcrypt.compare(password, user.password);
        if (!isMatched) {
            return response.status(401).json({
                message: 'Invalid credentials.',
            });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        delete user.password;
        response.status(200).json({
            token: token,
            user: user,
        });
    } catch (error) {
        response.status(500).json({
            error: error.message,
        });
    }
};

export {
    register,
    login
};
  