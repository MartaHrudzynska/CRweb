// core
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// models
const User = require("../models/User")

const registration = async (req, res) => {
    try {
        const {email, password, name, surname, mobile, year} = req.body;
        const candidate = await User.findOne({email})

        console.log(candidate)

        if (candidate) {
            return res.status(400).json({message: "Email вже використовується"})
        }

        const hashPassword = await bcrypt.hash(password, 7);

        const user = new User({email, password: hashPassword, name, surname, mobile, year})
        await user.save()

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

module.exports = registration;
