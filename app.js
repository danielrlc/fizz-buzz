for (i = 1; i <= 100; i++ ) {
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