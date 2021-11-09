const express = require('express');
const asyncHandler = require('express-async-handler');
const { Wine, Winery } = require('../../db/models');

const router = express.Router();


router.get('/', asyncHandler(async (req, res) => {
  const wines = await Wine.findAll();
  const wineries = await Winery.findAll();

  return res.json({ wines, wineries });
}));

router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
  const id = req.params.id;
  const wine = await Wine.findByPk(id);
  return res.json({ wine })
}));



module.exports = router;
