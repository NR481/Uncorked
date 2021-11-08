'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('WineryAdmins', [
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: 'adelsheimAdmin',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password'),
        wineryId: 1
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: 'archeryAdmin',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password'),
        wineryId: 2
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: 'argyleAdmin',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password'),
        wineryId: 3
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: 'bergstrommAdmin',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password'),
        wineryId: 4
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: 'carltonAdmin',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password'),
        wineryId: 5
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: 'chehalemAdmin',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password'),
        wineryId: 6
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: 'cristomAdmin',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password'),
        wineryId: 7
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: 'drouhinAdmin',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password'),
        wineryId: 8
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: 'sereneAdmin',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password'),
        wineryId: 9
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: 'elkCoveAdmin',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password'),
        wineryId: 10
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: 'eyrieAdmin',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password'),
        wineryId: 11
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: 'moraineAdmin',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password'),
        wineryId: 12
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: 'wrightAdmin',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password'),
        wineryId: 13
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: 'kingAdmin',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password'),
        wineryId: 14
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: 'lemelsonAdmin',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password'),
        wineryId: 15
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: 'ponziAdmin',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password'),
        wineryId: 16
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: 'rexAdmin',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password'),
        wineryId: 17
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: 'sokolAdmin',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password'),
        wineryId: 18
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: 'soterAdmin',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password'),
        wineryId: 19
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: 'donumAdmin',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password'),
        wineryId: 20
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: 'gundlachAdmin',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password'),
        wineryId: 21
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: 'hamelAdmin',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password'),
        wineryId: 22
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: 'scribeAdmin',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password'),
        wineryId: 23
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: 'hanzelldmin',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password'),
        wineryId: 24
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: 'viansaAdmin',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password'),
        wineryId: 25
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: 'buenaAdmin',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password'),
        wineryId: 26
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: 'sticksdmin',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password'),
        wineryId: 27
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: 'sattuiAdmin',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password'),
        wineryId: 28
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: 'darioushAdmin',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password'),
        wineryId: 29
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: 'montelenaAdmin',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password'),
        wineryId: 30
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: 'inglenookAdmin',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password'),
        wineryId: 31
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: 'carnerosAdmin',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password'),
        wineryId: 32
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: 'lunaAdmin',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password'),
        wineryId: 33
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: 'andrettiAdmin',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password'),
        wineryId: 34
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: 'spottswoodeAdmin',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password'),
        wineryId: 35
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: 'stagsAdmin',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password'),
        wineryId: 36
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: 'castelloAdmin',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password'),
        wineryId: 37
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: 'beringerAdmin',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password'),
        wineryId: 38
      }
    ], {});
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('WineryAdmins', null, {});
  }
};
