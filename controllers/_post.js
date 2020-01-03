const models = require("../models");
const user = models.user;
const order = models.order;
const wishlist = models.wishlist;
const event = models.event;

exports.storeUser = (req, res) => {
  user.create(req.body).then(data =>
    res.send({
      message: "success",
      data
    })
  ).catch(err=>res.send(err))
};

exports.storeEvent = (req, res) => {
  event.create(req.body).then(data =>
    res.send({
      message: "success",
      data
    })
  ).catch(err=>res.send(err))
};

exports.storeOrder = (req, res) => {
  order.create(req.body).then(data =>
    res.send({
      message: "success",
      data
    })
  ).catch(err=>res.send(err))
};

exports.storeWishlist = (req, res) => {
  wishlist.create(req.body).then(data =>
    res.send({
      message: "success",
      data
    })
  ).catch(err=>res.send(err))
};
