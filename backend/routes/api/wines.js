const express = require('express');
const asyncHandler = require('express-async-handler');
const { Wine, Winery } = require('../../db/models');

const router = express.Router();


router.get('/', asyncHandler(async (req, res) => {
  const wines = await Wine.findAll();
  const wineries = await Winery.findAll();

  return res.json({ wines, wineries });
}));



module.exports = router;
