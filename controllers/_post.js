const models = require("../models");
const user = models.user;


exports.storeUser = (req, res) => {
    user.create(req.body).then(data =>
      res.send({
        message: "success",
        data
      })
    );
  };
  