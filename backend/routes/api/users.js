const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Checkin, Comment } = require('../../db/models');

const router = express.Router();

const validateSignup = [
  check('firstName')
    .exists({ checkFalsy: true })
    .withMessage('Please provide your first name.'),
  check('lastName')
    .exists({ checkFalsy: true })
    .withMessage('Please provide your last name.'),
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email.'),
  check('username')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a username with at least 4 characters.'),
  check('username')
    .not()
    .isEmail()
    .withMessage('Username cannot be an email.'),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
  handleValidationErrors
];

router.post('/', validateSignup, asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password, username } = req.body;
  const user = await User.signup({ firstName, lastName, email, username, password });

  await setTokenCookie(res, user);

  return res.json({ user });
}));

router.get('/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {
  const userId = req.params.id;
  const user = await User.getCurrentUserById(userId);
  const checkins = await Checkin.findAll({
    where: { userId }
  });

  return res.json({ user, checkins });
}));

router.get('/:id(\\d+)/profile', asyncHandler(async (req, res) => {
  const userId = req.params.id;
  const profile = await User.toSafeObject(userId);
  const checkins = await Checkin.findAll({
    where: { userId }
  });
  return res.json({ profile, checkins });
}));

module.exports = router;
