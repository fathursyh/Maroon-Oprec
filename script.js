var splash = document.getElementById('splash');
var splash2 = document.querySelector('#splash2');
function splashButton() {
  klikSplash.play();
  fadeAway(splash, 400);

  setTimeout(function () {
    document.querySelector('body').style.backgroundColor = 'black';
  }, 1200);
  
  setTimeout(function () {
    splash2.style.display = 'flex';
    splash2.style.opacity = '100';
  }, 2200);

  playAfter((fadeAway(splash2, 5400)), bgMusic);
};

var klikSplash = new Audio('./assets/sounds/klikSplash.mp3');
klikSplash.volume = 0.8;

var bgMusic = new Audio('./assets/sounds/bgLagu.mp3');

async function fadeAway(objek, durations) {
  let janji = new Promise((resolve) => {
    setTimeout(() => resolve(objek.style.opacity = '0'), durations);
  })
  await janji;
  setTimeout(() => {(objek.style.display = 'none')}, durations*2);
};

async function playAfter(suatuFungsi, song) {
  await suatuFungsi;
  setTimeout(function (){
    let suara = 0.1
    song.play();
    song.volume = suara;  
    var intervalListener = setInterval(function () {
      suara += 0.1;
      song.volume = suara;
      cekInterval();
    }, 1200);

    function cekInterval() {
      if (suara > 0.7) {
        clearInterval(intervalListener);
      }
    }

  }, 2000)
}
