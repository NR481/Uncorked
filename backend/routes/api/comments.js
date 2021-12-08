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

router.put('/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {
  const id = req.params.id; // comment ID
  const { comment, userId, checkinId } = req.body;
  const editedComment = await Comment.findByPk(id);
  await editedComment.update({
    comment,
    userId,
    checkinId
  });

  if (editedComment) await editedComment.save();
  return res.json({ editedComment });
}))

module.exports = router;
