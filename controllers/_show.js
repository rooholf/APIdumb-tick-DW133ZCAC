const models = require("../models");
const Cat = models.category;
const Event = models.event;
const user = models.user;
const order = models.order;

exports.showAllUser = (req, res) => {
  user
    .findAll({})
    .then(data => res.send(data))
    .catch(err => res.send(err));
};

exports.showOneUser = (req, res) => {
  user
    .findOne({
      where: { id: req.params.id }
    })
    .then(data => res.send(data))
    .catch(err => res.send(err));
};



exports.showAllCategories = (req, res) => {
  Cat.findAll()
    .then(data => res.send(data))
    .catch(err => res.send(err));
};

exports.showEventOnCategory = (req, res) => {
  Cat.findOne({
    where: { id: req.params.id },
    include: [
      {
        model: Event,
        as: "event"
      }
    ]
  })
    .then(data => res.send(data))
    .catch(err => res.send(err));
};

exports.showAllEvents = (req, res) => {
  Event.findAll({
    include: [
      {
        model: Cat,
        as: "categories"
      },
      {
        model: user,
        as: 'user'
      }
    ]
  })
    .then(data => res.send(data))
    .catch(err => res.send(err));
};

exports.showOneEvent = (req, res) => {
  Event
    .findOne({
      where: { id: req.params.id },
      include: [
        {
          model: Cat,
          as: "categories"
        },
        {
          model: user,
          as: 'user'
        }
      ]
    })
    .then(data => res.send(data))
    .catch(err => res.send(err));
};
