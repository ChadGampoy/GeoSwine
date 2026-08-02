const db = require("../config/database");

const User = {

    async getAll() {
        const [rows] = await db.query("SELECT * FROM users");
        return rows;
    },

    async getByEmail(email) {
        const [rows] = await db.query(
            "SELECT * FROM users WHERE email = ?",
            [email]
        );

        return rows[0];
    },

    async create(userData) {

        const [result] = await db.query(

            `INSERT INTO users
            (
                role_id,
                first_name,
                middle_name,
                last_name,
                suffix,
                sex,
                birth_date,
                contact_number,
                email,
                password
            )
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,

            [
                userData.role_id,
                userData.first_name,
                userData.middle_name,
                userData.last_name,
                userData.suffix,
                userData.sex,
                userData.birth_date,
                userData.contact_number,
                userData.email,
                userData.password
            ]

        );

        return result.insertId;
    }

};

module.exports = User;