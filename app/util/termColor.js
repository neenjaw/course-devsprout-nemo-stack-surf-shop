const termColor = {};

termColor.COLOR = {};

termColor.COLOR.RESET   = '\x1B[0m';

termColor.COLOR.BLACK   = '\x1B[30m';
termColor.COLOR.RED     = '\x1B[31m';
termColor.COLOR.GREEN   = '\x1B[32m';
termColor.COLOR.YELLOW  = '\x1B[33m';
termColor.COLOR.BLUE    = '\x1B[34m';
termColor.COLOR.MAGENTA = '\x1B[35m';
termColor.COLOR.CYAN    = '\x1B[36m';
termColor.COLOR.WHITE   = '\x1B[37m';

termColor.COLOR.BRIGHT_BLACK   = '\x1B[30;1m';
termColor.COLOR.BRIGHT_RED     = '\x1B[31;1m';
termColor.COLOR.BRIGHT_GREEN   = '\x1B[32;1m';
termColor.COLOR.BRIGHT_YELLOW  = '\x1B[33;1m';
termColor.COLOR.BRIGHT_BLUE    = '\x1B[34;1m';
termColor.COLOR.BRIGHT_MAGENTA = '\x1B[35;1m';
termColor.COLOR.BRIGHT_CYAN    = '\x1B[36;1m';
termColor.COLOR.BRIGHT_WHITE   = '\x1B[37;1m';


termColor.getColorCode = (color) => {
  return termColor.COLOR[color.toUpperCase()] || termColor.COLOR.RESET;
};

termColor.paint = (string, color) => {
  const paintColor = termColor.getColorCode(color);
    
  return paintColor + string + termColor.COLOR.RESET;
};

module.exports = termColor;
