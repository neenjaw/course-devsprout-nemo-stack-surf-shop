const termColor = require('./termColor');

const checklist = {};

checklist.print = (status, message, color) => {
  if (color === undefined) {
    if (status === 'OK') {
      color = 'green';
    }
    else if (status === 'WARNING') {
      color = 'yellow';
    }
    else if (status === 'FAIL') {
      color = 'red';
    }
    else if (status === 'INFO') {
      color = 'blue';
    }
  }

  return `[ ${termColor.paint(status, color)} ] ${message}`;
};

module.exports = checklist;