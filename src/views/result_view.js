const PubSub = require('../helpers/pub_sub.js');


const ResultView = function() {


};


ResultView.prototype.displayResult = function (result) {
  const resultElement = document.querySelector('#result');
  resultElement.textContent = result;
};


module.exports = ResultView;
