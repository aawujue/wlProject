var express = require('express')
  , router = express.Router()

router.use('/comments', require('./comments'))
router.use('/users', require('./users'))

router.get('/', function(req, res) {
  res.render('index', {user: '吴珏和刘伟勋的项目'})
})

module.exports = router