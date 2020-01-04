const models = require("../models");
const Event = models.event;

exports.deleteEvent = (req, res) => {
  Event.destroy({ where: { id: req.params.id } })
    .then(data => {
      res.send({
        message: "Deleted",
        data
      });
    })
    .catch(err => res.send(err));
};
