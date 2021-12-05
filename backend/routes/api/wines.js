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

router.delete('/:id(\\d+)', asyncHandler(async (req, res) => {
  const id = req.params.id;
  const wine = await Wine.findByPk(id);
  console.log(wine);
  if (wine) {
    await wine.destroy();
  }
  return;
}));

router.post('/', asyncHandler(async (req, res) => {
  const {
    name,
    image,
    vintage,
    varietal,
    winery,
    location,
    description
  } = req.body;

  const validateWinery = await Winery.findOne({
    where: {
      name: winery
    }
  });

  if (validateWinery) {
    const wine = await Wine.create({
      name,
      image,
      vintage,
      description,
      varietal,
      wineryId: validateWinery.id
    });
    return res.json({ wine, winery: validateWinery })

  } else {
      const newWinery = await Winery.create({
        name: winery,
        location
      });
      if (newWinery) {
        const wine = await Wine.create({
          name,
          image,
          vintage,
          description,
          varietal,
          wineryId: newWinery.id
        });

        return res.json({ wine, winery: newWinery });
      }

  }
}));

module.exports = router;
