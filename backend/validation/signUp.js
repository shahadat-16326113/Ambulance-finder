const Validator = require('validator');
const isEmpty = require('is-empty');



module.exports = function validateSignUpInput(data){

    let errors = {};

    
    data.fname    = !isEmpty(data.fname) ? data.fname : "";
    data.lname    = !isEmpty(data.lname) ? data.lname : "";
    data.phone    = !isEmpty(data.phone) ? data.phone : "";
    data.country  = !isEmpty(data.country) ? data.country : "";
    data.city     = !isEmpty(data.city) ? data.city : "";
    data.email    = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.dob      = !isEmpty(data.dob) ? data.dob : "";


    
    if(Validator.isEmpty(data.fname)) {
        errors.fname = "FullName field is required";
    }


    if(Validator.isEmpty(data.lname)) {
        errors.lname = "LastName field is required";
    }

    if(Validator.isEmpty(data.phone)) {
        errors.phone = "Phone field is required";
    }

    if(Validator.isEmpty(data.country)) {
        errors.country = "Country field is required";
    }

    if(Validator.isEmpty(data.city)) {
        errors.city = "city field is required";
    }

    
    if(Validator.isEmpty(data.email)){
        errors.email = "Email field is required";
    }else if(!Validator.isEmail(data.email)){
        errors.email = "Email is invalid";
    }

    
    if(Validator.isEmpty(data.password)){
        errors.password = "Password field is required";
    }


    if(!Validator.isLength(data.password,{min:6,max:30})){
        errors.password = "Password must be at least 6 characters";
    }

    if(Validator.isEmpty(data.dob)) {
        errors.dob = "Date Of Birth field is required";
    }

    return{
        errors,
        isValid:isEmpty(errors)
    };

};