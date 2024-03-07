function inViewport(element) {
  var posisi = element.getBoundingClientRect();
  return !(posisi.top > innerHeight * 0.6 || posisi.bottom < 0);
}

var myElement = document.querySelectorAll('.komik');
window.addEventListener("scroll", () => {
  myElement.forEach((item) => {
    if (inViewport(item)) {
      item.classList.remove("hidden3");
    } else {
      item.classList.add("hidden3");
    }
  });
}, true);
