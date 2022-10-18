const User = require("../models/user");
const bcrypt = require("bcryptjs");

exports.postCreateUser = (req, res, next) => {
  const email = req.body.email;
  const fullName = req.body.fullName;
  const CRA = req.body.CRA;
  const password = req.body.password;

  return bcrypt
    .hash(password, 12)
    .then((hashedPassword) => {
      const user = new User({
        email: email,
        CRA: CRA,
        password: hashedPassword,
        fullName: fullName,
      });

      return user.save();
    })
    .then(() => {
      return res.status(200).send("USER CREATED");
    })
    .catch((e) => {
      console.log(e);
      res.status(404).send(e);
    });
};
