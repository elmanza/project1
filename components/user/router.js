var express = require('express');
var router = express.Router();
const User = require('../../config/models/User')

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/hola', async (req, res) => {
  const user = await User.create({
    username: 'Manzano',
    birthday: new Date(1980, 6, 20)
  });
  res.send(user.toJSON());
});

router.get('/about', (req, res, next) => {
  res.send('About USERS');
});

module.exports = router;