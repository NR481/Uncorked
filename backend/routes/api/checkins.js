const express = require('express');
const asyncHandler = require('express-async-handler');
const { requireAuth } = require('../../utils/auth');
const { Checkin } = require('../../db/models');

const router = express.Router();

router.post('/', requireAuth, asyncHandler(async (req, res) => {
  const { comment, userId, wineryId, wineId } = req.body;
  const checkin = await Checkin.create({
    comment,
    userId,
    wineryId,
    wineId
  });
  return res.json({ checkin });
}));

router.put('/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {
  const id = req.params.id;
  const { comment, wineryId, wineId } = req.body;

  const checkin = await Checkin.findByPk(id);
  await checkin.update({
    comment,
    wineryId,
    wineId
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
