$(document).ready(function () {
  // array with texts to type in typewriter
  let dataText = ["I'm a Web Developer.", "I'm a Web Designer.", "I'm a Freelancer."];

  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < text.length) {
      // add next character to h1
      document.querySelector("#job").innerHTML =
        text.substring(0, i + 1) +
        '<span class="type" aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback);
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == "function") {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the dataText array
  function StartTextAnimation(i) {
    if (typeof dataText[i] == "undefined") {
      setTimeout(function () {
        StartTextAnimation(0);
      }, 1000);
    }
    // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
      typeWriter(dataText[i], 0, function () {
        // after callback (and whole text has been animated), start next text
        StartTextAnimation(i + 1);
      });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});

$(document).ready(function () {
  $(".menu-hamburguer").click(function () {
    var display;
    $('.menu-hamburguer').toggleClass("change");
    display = $(".sidebar").css("display");

    if (display === "block") {
      $(".sidebar").css("display", "none");
    } else {
      $(".sidebar").css("display", "block");
    }
  })
});