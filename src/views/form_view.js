const PubSub = require('../helpers/pub_sub.js');


const FormView = function() {


};


FormView.prototype.bindEvents = function () {
  const form = document.querySelector('#prime-checker-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.dir(event);
    const numberToCheck = event.target.number.value;
    console.dir(numberToCheck);
    PubSub.publish('FormView: numberSubmitted', numberToCheck);
  });
};


module.exports = FormView;
