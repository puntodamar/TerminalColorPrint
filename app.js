const validator = require('validator');
const chalk     = require('chalk');
const getNotes  = require('./notes');

const msg = getNotes();
const greenMsh = chalk.red('Success!');
console.log(greenMsh);