const { validationResult}= require("express-validator");
const model = require('../models/User');
const register = (req, res) => {
    res.render("auth/register");
}
const postRegister =async  (req, res) =>{
    const errors = validationResult(req);

if (!errors.isEmpty()) {
    return res.render("auth/register" , {
        values :req.body,
        errors: errors.array(),
    });
} 
try {
    const user = await model.create(req.body);

// console.log(req.body, user);
res.redirect("/");
    
} catch (error) {
    console.log(error);
    res.send(error);
    
}

};




const login= (req, res) => {
    res.render('auth/login')
}
const postLogin= (req, res) => {
    const errors =validationResult(req);

    if (!errors.isEmpty()) {
        return res.render("auth/login" , {
            values :req.body,
            errors: errors.array(),
        });
}
};
const logout = (req, res) =>{}


module.exports = {
    register,
postRegister,
login,
postLogin,
logout,
};