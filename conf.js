const Conf = require('conf');

const mojiList = require('./constans');

const config = new Conf({
  cwd: __dirname,
  fileExtension: ''
});

config.set('mojiList', mojiList);

module.exports = config;
