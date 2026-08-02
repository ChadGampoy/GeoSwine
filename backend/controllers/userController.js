const User = require("../models/User");

exports.getAllUsers = (req, res) => {

    User.getAll((err, results) => {

        if (err) {
            return res.status(500).json({
                success: false,
                message: err.message
            });
        }

        res.json({
            success: true,
            data: results
        });

    });

};