const jwt = require("jsonwebtoken");
const models = require("../models");
var Sequelize = require("sequelize");

const User = models.user;

exports.login = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  User.findOne({ where: { email, password } })
    .then(user => {
      if (user) {
        const id = user.id;
        const name =user.name
        const img = user.img
        const email = user.email;
        const token = jwt.sign({ emailJwt: email }, "dumbways");
        res.send({ id,name,img, email, token });
      } else {
        res.send({ error: true, message: "wrong email or password" });
      }
    })
    .catch(err => res.send(err));
};

exports.register = (req, res) => {
  User.create(req.body)
    .then(user => {
      const email = user.email;
      const token = jwt.sign({ emailJwt: email }, "my-secret-key");
      res.send({
        user,
        token
      });
    })
    .catch(Sequelize.ValidationError, err => {
      res.status(422).send(err.errors);
    })
    .catch(err => res.send(err));
};
