const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");


const validateLoginInput = require("../validation/login");

const User = require("../models/UserSchema");




router.post("/signin",(req,res) => {

    
    const {errors, isValid} = validateLoginInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const username = req.body.username;
    const password = req.body.password;
   
    
    User.findOne({username}).then(user=>{
        if(!user){
            return res.status(404).json({ usernameNotFound: "Username not found" });
        }

    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
            // Create JWT Payload
            const payload = {
                id: user.id,
                username: user.username
            };

            // Sign token
            jwt.sign(
                payload,
                keys.secretOrKey,
                {
                 expiresIn: '5h'
                },
                (err, token) => {
                res.json({
                    success: true,
                    token: "Bearer " + token
                });
                }
            );
        } 
        else {
          return res
            .status(400)
            .json({ passwordInCorrect: "Password is wrong" });
        }

      });

    });

});


module.exports = router;