const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const authService = {

    async register(userData) {

        // Check if email already exists
        const existingUser = await User.getByEmail(userData.email);

        if (existingUser) {
            throw new Error("Email already exists.");
        }

        // Encrypt password
        const hashedPassword = await bcrypt.hash(userData.password, 10);

        userData.password = hashedPassword;

        // Save to database
        const userId = await User.create(userData);

        return {
            id: userId,
            message: "User registered successfully."
        };
    
    },
    async login(email, password) {


    }

};

module.exports = authService;