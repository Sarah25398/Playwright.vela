// cucumber.js
const common = [
  '--require features/step-definitions/example.steps.js', // Load step definitions
  '--format progress-bar', // Load progress bar formatter
  
].join(' ');

module.exports = {
  default: common,
};
