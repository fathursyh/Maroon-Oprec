function inViewport(element) {
  var posisi = element.getBoundingClientRect();
  return !(posisi.top > innerHeight * 0.6 || posisi.bottom < 0);
}

var myElement = document.querySelectorAll('.komik');
window.addEventListener("scroll", () => {
  if(inViewport(document.querySelector('#main-content h1'))) {
    document.getElementById('main-content').style.backgroundColor = "rgb(226, 226, 226)";
  }
  myElement.forEach((item) => {
    if (inViewport(item)) {
      item.classList.remove("hidden3");
      document.getElementById('main-content').style.backgroundColor = "#9f4039";
    } else {
      item.classList.add("hidden3");
    }
  });
}, true);
