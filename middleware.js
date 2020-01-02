const jwt = require('express-jwt')

exports.auth = jwt({secret: "dumbways"})