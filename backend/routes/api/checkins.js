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



module.exports = router;
