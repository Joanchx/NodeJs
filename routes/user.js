const express = require('express');
const router = express.Router();
const { login } = require('../controller/user')


/* GET users listing. */
router.get('/list', function (req, res, next) {
  res.json('用户列表');
});

//login
router.post('/login', (req, res, next) => {
  const { userName, password } = req.body;
  const result = login(userName, password);

  result.then(data => res.json(data))

})


module.exports = router;
