var express = require('express')
  , router = express.Router()

// Define routes handling profile requests
router.get('/home', function(req, res) {
  res.render('home', {user: '吴珏和刘伟勋的项目'})
})
module.exports = router