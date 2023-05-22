// core
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// models
const User = require("../models/User")

const login = async (req, res) => {
    try {
        const {email, password} = req.body;

        const user = await User.findOne({email})

        if (!user) {
            return res.status(400).json({message: "Пароль або email не валідні"})
        }

        const validPassword = bcrypt.compareSync(password, user.password)

        if (!validPassword) {
            return res.status(400).json({message: "Пароль або email не валідні"})
        }

        const token = jwt.sign({email: user.email, login: user.name}, "secretKeyToken", {expiresIn: "24h"})

        return res.json({token, user: {
            email: user.email,
            mobile: user.mobile,
            name: user.name,
            surname: user.surname,
        }})

    } catch (e) {
        res.status(500).json(e)
    }
}

module.exports = login;
