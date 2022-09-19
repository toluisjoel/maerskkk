/* When the user scrolls down, hide the navbar.
When the user scrolls up, show the navbar */

var prevScrollpos = window.pageYOffset;

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";

  } else {
    document.getElementById("navbar").style.top = "-100px";
  }

  prevScrollpos = currentScrollPos;
}

// var prevScrollpos = window.pageYOffset;
// window.onscroll = function () {
//   var currentScrollPos = window.pageYOffset;

//   if (prevScrollpos >= currentScrollPos || currentScrollPos <= document.getElementById("navbar").offsetHeight) {
//     document.getElementById("navbar").style.top = "0";
//     document.getElementById("navbar").style.background = "#2b2b2b";
//     document.getElementById("totop").style.bottom = "-120px";

//   } else {
//     document.getElementById("navbar").style.top = "-50px";
//     document.getElementById("navbar").style.background = "transparent";
//     document.getElementById("totop").style.bottom = "0px";
//   }
//   prevScrollpos = currentScrollPos;
// }