const authService = require("../services/authService");

const authController = {

    async register(req, res) {

        try {

            const result = await authService.register(req.body);

            res.status(201).json({
                success: true,
                data: result
            });

        } catch (error) {

            res.status(400).json({
                success: false,
                message: error.message
            });

        }

    }

};

module.exports = authController;