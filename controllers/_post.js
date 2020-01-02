const models = require("../models");
const user = models.user;
const wishlist = models.wishlist

exports.storeUser = (req, res) => {
    user.create(req.body).then(data =>
      res.send({
        message: "success",
        data
      })
    );
  };
  

  exports.storeOrder = (req, res) => {
    order.create(req.body).then(data =>
      res.send({
        message: "success",
        data
      })
    );
  };

  exports.storeWishlist = (req, res) => {
    wishlist.create(req.body).then(data =>
      res.send({
        message: "success",
        data
      })
    );
  };