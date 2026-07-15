const User = require("../models/user.model");

const jwt = require("jsonwebtoken");

exports.register = async(req,res)=>{
    const {name, email, password} = req.body;

    const user = await User.create({
        name,

        email,

        password
    })


res.json({
    message: "user Registerd",

    user
});

};

exports.login = async(req,res)=>{
    const{email,password} = req.body;

    const user = await User.findOne({
        email
    })

    if(!user){
         return res.json({

            message: "User Not Found"

        });

    }

    if (password != user.password) {

        return res.json({

            message: "Wrong Password"

        });

    }

    const token = jwt.sign(

        {

            id: user._id,

            email: user.email

        },

        process.env.JWT_SECRET

    );

    res.json({

        message: "Login Success",

        token

    });

};

exports.profile = (req, res) => {

    res.json({

        message: "Protected Route"

    });

};
    
