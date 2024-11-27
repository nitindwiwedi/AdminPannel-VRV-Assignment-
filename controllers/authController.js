const userModel = require("../models/user-model");
const bcrypt = require("bcrypt");

module.exports.userRegister =async function (req, res) {
  let { name, email, password } = req.body;
  let user = await userModel.findOne({ email });
  if (user) return res.send("You already have an account please login");
  else {
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, async function (err, hash) {
        if (err) return res.send(err.message);
        else {
          let user = await userModel.create({
            email,
            password: hash,
            name,
          });
          res.send(user);
        }
      });
    });
  }
};

var active;
module.exports.userLogin = async function(req, res){
    let {email, password} = req.body;
    let user = await userModel.findOne({email});
    if(!user) return res.send("email or password incorrect");
    else{
        bcrypt.compare(password, user.password,async function(err, result){
            if(err) return res.send(err.message);
            if(result){
                let updateduser = await userModel.findOneAndUpdate({email}, {isloggedin: true}, {new: true});
                active = updateduser;
                res.render("home");
            }else{
                res.send("Email or Password invalid");
            }
        })
    }
}

module.exports.userLogout =async function(req, res){
    await userModel.findOneAndUpdate({email: active.email}, {isloggedin: false}, {new: true});
    res.redirect("/");
}
