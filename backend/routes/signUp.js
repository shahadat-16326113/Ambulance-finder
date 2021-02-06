const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");



const validateSignUpInput = require("../validation/register");
const User = require("../models/UserSchema");


router.post("/signup", (req, res) => {
    
    
    const {errors, isValid} = validateSignUpInput(req.body);
    
    if(!isValid){
        return res.status(400).json(errors);
    }

    User.findOne({email:req.body.email}).then(user=>{

        if(user){
            return res.status(400).json({email:"Email already exists"});
        } 
        else{

            const newUser = new User({

                fname:    req.body.fname,
                lname:    req.body.lname,
                phone:    req.body.phone,
                country:  req.body.country,
                city:     req.body.city,
                email:    req.body.email,
                password: req.body.password,
                dob:      req.body.dob

            });

            
            // Hash password before storing in database
            const rounds  = 10;
            bcrypt.genSalt(rounds, (err, salt) => {

                bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) throw err;
                newUser.password = hash;
                newUser
                    .save()
                    .then(user => res.json(user))
                    .catch(err => console.log(err));

                });
            });
        }

    });

});

module.exports = router;
