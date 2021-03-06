const express = require('express');
const asyncHandler = require('express-async-handler');
const { requireAuth } = require('../../utils/auth');
const { Checkin, Comment } = require('../../db/models');

const router = express.Router();

router.get('/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {
  const checkinId = req.params.id;
  const checkin = await Checkin.findByPk(checkinId);
  const comments = await Comment.findAll({
    where: { checkinId }
  });
  return res.json({ checkin, comments });
}));

router.post('/', requireAuth, asyncHandler(async (req, res) => {
  const { comment, userId, wineryId, wineId, location } = req.body;
  const checkin = await Checkin.create({
    comment,
    userId,
    wineryId,
    wineId,
    location
  });
  return res.json({ checkin });
}));

router.put('/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {
  const id = req.params.id;
  const { comment, wineryId, wineId, location } = req.body;

  const checkin = await Checkin.findByPk(id);
  await checkin.update({
    comment,
    wineryId,
    wineId,
    location
  });
  if (checkin) {
    await checkin.save();
  }
  return res.json({ checkin });
}));

router.delete('/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {
  const id = req.params.id;

  const checkin = await Checkin.findByPk(id);

  if (checkin) {
    await checkin.destroy();
  }
  return res.json({ checkin });
}));



module.exports = router;
