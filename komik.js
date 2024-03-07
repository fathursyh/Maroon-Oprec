function inViewport(element) {
  var posisi = element.getBoundingClientRect();
  // cek posisi pas element udah 20% atau 0.2 keliatan
  return !(posisi.top > innerHeight * 0.8 || posisi.bottom < 0);
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
