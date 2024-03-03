var splash = document.getElementById('splash');
function splashButton() {
  setTimeout(function () {
    splash.style.opacity = '0';
  }, 400);
  setTimeout(function () {
    splash.style.display = 'none';
  }, 1000);
};