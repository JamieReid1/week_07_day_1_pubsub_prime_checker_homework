const PubSub = require('../helpers/pub_sub.js');


const ResultView = function() {


};


ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('PrimeChecker: numberChecked', (event) => {
    const resultString = event.detail;
    this.displayResult(resultString);
  })
};

ResultView.prototype.displayResult = function (result) {
  const resultElement = document.querySelector('#result');
  resultElement.textContent = result;
};


module.exports = ResultView;
