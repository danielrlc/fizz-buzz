$(document).ready(function() {
  var inputString = prompt("Pick a number from 1 to 100");
  var inputNumber = +inputString;
  if (isNaN(inputNumber)) {
    alert("Choose a number! Refresh page and try again.");
    resetPage();
  }
  else if (inputNumber % 1 != 0) {
    alert("No decimal places allowed! Refresh page and try again.");
    resetPage();
  }
  else if (inputNumber < 1) {
    alert("The number must be 1 or higher! Refresh page and try again.");
    resetPage();
  }
  else {
    function highestNumber(inputNumber) {
      for (i = 1; i <= inputNumber; i++ ) {
        if (i % 3 == 0 && i % 5 == 0) {
          $("body").append("<p>fizz-buzz</p>");
        }
        else if (i % 3 == 0) {
          $("body").append("<p>fizz</p>");
        }
        else if (i % 5 == 0) {
          $("body").append("<p>buzz</p>");
        }
        else {
          $("body").append("<p>" + i + "</p>");
        }
      }
    }
  }
  highestNumber(inputNumber);
});