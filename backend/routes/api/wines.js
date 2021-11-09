const express = require('express');
const asyncHandler = require('express-async-handler');
const { Wine } = require('../../db/models');

const router = express.Router();


router.get('/', asyncHandler(async (req, res) => {
  const wines = await Wine.findAll();
  return res.json({wines});
}));



module.exports = router;
