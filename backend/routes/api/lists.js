const express = require('express');
const asyncHandler = require('express-async-handler');
const { requireAuth } = require('../../utils/auth');
const { List } = require('../../db/models');

const router = express.Router();

router.post('/', requireAuth, asyncHandler(async (req, res) => {
  const { name, userId } = req.body;
  const newList = await List.create({
    name,
    userId
  });
  return res.json({ newList });
}));


module.exports = router;
