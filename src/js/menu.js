'use strict';
(function() {
var navToggle = document.querySelector('.toggle');
var menuToggle = document.querySelector('.navigation');

navToggle.addEventListener('click', toggle);
function toggle(e) {
  e.preventDefault();
  menuToggle.classList.toggle('menu--visible');
  navToggle.classList.toggle('toggle--opened');
}
})();
