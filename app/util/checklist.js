const termColor = require('./termColor');

const checklist = {};

checklist.print = (status, message, color) => {
    if (color === undefined) {
        if (status === 'OK') {
            color = 'green';
        }
        else if (status === 'FAIL') {
            color = 'red';
        }
    }

    return `[ ${termColor.paint(status, color)} ] ${message}`;
};

module.exports = checklist;