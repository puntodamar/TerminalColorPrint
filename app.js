const validator = require('validator');
const chalk     = require('chalk');
const yargs     = require('yargs');
const fs        = require('fs');

const getNotes  = require('./notes');

yargs.version('1.1.0');
// create a command
yargs.command({
    command: 'add',
    descibe: 'Add a new note',
    builder: {
        title: {
            describe    : 'Note title',
            demandOption: true,
            type        : 'string'
        },
        body: {
            describe    : 'Note body',
            demandOption: true,
            type        : 'string'
        }
    },
    handler: (argv) => {
        console.log(`Adding a new note \ntitle : ${argv.title} \ncontent : ${argv.body}`);
    }
});

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: () => {
        console.log('Removing a note');
    }
})

yargs.parse();