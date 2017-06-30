// .eslintrc.js

// If you do not specify any middleware to call(),
// it will use the local .neutrinorc.js file

const { Neutrino } = require('neutrino');
const api = Neutrino();

module.exports = api.call('eslintrc');
