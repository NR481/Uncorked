'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Wineries', [
      {
        name: 'Adelsheim Vineyard',
        location: 'Willamette Valley'
      },
      {
        name: 'Archery Summit',
        location: 'Willamette Valley'
      },
      {
        name: 'Argyle Winery',
        location: 'Willamette Valley'
      },
      {
        name: 'Bergström Wines',
        location: 'Willamette Valley'
      },
      {
        name: 'Carlton Winemakers Studio',
        location: 'Willamette Valley'
      },
      {
        name: 'Chehalem',
        location: 'Willamette Valley'
      },
      {
        name: 'Cristom Vineyards',
        location: 'Willamette Valley'
      },
      {
        name: 'Domaine Drouhin',
        location: 'Willamette Valley'
      },
      {
        name: 'Domaine Serene',
        location: 'Willamette Valley'
      },
      {
        name: 'Elk Cove Vineyards',
        location: 'Willamette Valley'
      },
      {
        name: 'Eyrie Vineyards',
        location: 'Willamette Valley'
      },
      {
        name: 'Gran Moraine',
        location: 'Willamette Valley'
      },
      {
        name: 'Ken Wright Cellars',
        location: 'Willamette Valley'
      },
      {
        name: 'King Estate',
        location: 'Willamette Valley'
      },
      {
        name: 'Lemelson Vineyards',
        location: 'Willamette Valley'
      },
      {
        name: 'Ponzi',
        location: 'Willamette Valley'
      },
      {
        name: 'Rex Hill',
        location: 'Willamette Valley'
      },
      {
        name: 'Sokol Blosser',
        location: 'Willamette Valley'
      },
      {
        name: 'Soter Vineyards',
        location: 'Willamette Valley'
      },
      {
        name: 'Donum Estate',
        location: 'Sonoma Valley'
      },
      {
        name: 'Gundlach Bundschu',
        location: 'Sonoma Valley'
      },
      {
        name: 'Hamel Family Wines',
        location: 'Sonoma Valley'
      },
      {
        name: 'Scribe Winery',
        location: 'Sonoma Valley'
      },
      {
        name: 'Hanzell Vineyards',
        location: 'Sonoma Valley'
      },
      {
        name: 'Viansa Sonoma Winery',
        location: 'Sonoma Valley'
      },
      {
        name: 'Buena Vista Winery',
        location: 'Sonoma Valley'
      },
      {
        name: 'Three Sticks',
        location: 'Sonoma Valley'
      },
      {
        name: 'V. Sattui Winery',
        location: 'Napa Valley'
      },
      {
        name: 'Darioush Winery',
        location: 'Napa Valley'
      },
      {
        name: 'Chateau Montelena',
        location: 'Napa Valley'
      },
      {
        name: 'Inglenook Winery',
        location: 'Napa Valley'
      },
      {
        name: 'Domaine Carneros',
        location: 'Napa Valley'
      },
      {
        name: 'Luna Vineyards',
        location: 'Napa Valley'
      },
      {
        name: 'Andretti Winery',
        location: 'Napa Valley'
      },
      {
        name: 'Spottswoode Winery',
        location: 'Napa Valley'
      },
      {
        name: "Stag's Leap Wine Cellars",
        location: 'Napa Valley'
      },
      {
        name: 'Castello di Amorosa',
        location: 'Napa Valley'
      },
      {
        name: 'Beringer Vineyards',
        location: 'Napa Valley'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Wineries', null, {});
  }
};
