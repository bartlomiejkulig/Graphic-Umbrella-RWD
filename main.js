var button = document.getElementById("burger-nav");
var menu = document.getElementById("menu");
button.addEventListener("click", function () {
  'use strict';
  menu.classList.toggle("opened");
},false);
