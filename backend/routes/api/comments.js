const express = require('express');
const asyncHandler = require('express-async-handler');
const { requireAuth } = require('../../utils/auth');
const { Comment } = require('../../db/models');

const router = express.Router();

router.post('/', requireAuth, asyncHandler(async (req, res) => {
  const { comment, userId, checkinId } = req.body;
  const newComment = await Comment.create({
    comment,
    userId,
    checkinId
  });
  return res.json({ newComment });
}));

module.exports = router;
