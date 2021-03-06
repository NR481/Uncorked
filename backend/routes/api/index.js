const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth.js');
const { User } = require('../../db/models');
const sessionRouter = require('./session');
const usersRouter = require('./users');
const winesRouter = require('./wines');
const checkinsRouter = require('./checkins');
const commentsRouter = require('./comments');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/wines', winesRouter);
router.use('/checkins', checkinsRouter);
router.use('/comments', commentsRouter);

router.post('/test', (req, res) => {
  res.json({ requestbody: req.body });
});

router.get('/set-token-cookie', asyncHandler(async (req, res) => {
  const user = await User.findOne({
    where: {
      username: 'Demo-lition'
    }
  })
  setTokenCookie(res, user);
  return res.json({ user });
}));

router.get('/restore-user', restoreUser, (req, res) => {
  return res.json(req.user);
});

router.get('/require-auth', requireAuth, (req, res) => {
  return res.json(req.user);
});

module.exports = router;
