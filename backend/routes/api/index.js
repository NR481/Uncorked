const router = require('express').Router();

router.post('/test', (req, res) => {
  res.json({ requestbody: req.body });
});

module.exports = router;
