const models = require("../models");
const user = models.user;
const order = models.order


exports.updateUser = (req,res) => {
    const id = req.params.id
    user.update(req.body, {where: {id: req.params.id}}).then(data=>{
      res.send(data,
        id)
    }).catch(err =>{
      res.send(err)
    })
  }

  exports.updateOrder = (req,res) => {
    const id = req.params.id
    order.update(req.body, {where: {id: req.params.id}}).then(data=>{
      res.send(data,
        id)
    }).catch(err =>{
      res.send(err)
    })
  }