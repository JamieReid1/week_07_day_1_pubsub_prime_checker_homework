const PubSub = require('../helpers/pub_sub.js');


const PrimeChecker = function() {


};


PrimeChecker.prototype.checkPrimeNumber = function (number) {
  if (number <= 1) {
    return 'No!, That is not a prime Number.';
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        return 'No!, That is not a prime Number.';
    }
  }
  return 'Yes!, That is a prime Number.';
};


module.exports = PrimeChecker;
