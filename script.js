var splash = document.getElementById('splash');
var splash2 = document.querySelector('#splash2');
var nav = document.querySelector('nav');
var bottom = document.getElementById('bottomBar');
var hidden = true;
var pause = false;
var mainContent = false;
function splashButton() {
  klikSplash.play();
  fadeAway(splash, 400);

  setTimeout(function () {
    document.querySelector('body').style.backgroundColor = 'black';
  }, 1200);

  setTimeout(function () {
    splash2.style.display = 'flex';
    splash2.style.opacity = '100';
  }, 2600);

  playAfter((fadeAway(splash2, 5800)), bgMusic);
};

var klikSplash = new Audio('./assets/sounds/klikSplash.mp3');
klikSplash.volume = 0.8;

var bgMusic = new Audio('./assets/sounds/bgLagu.mp3');
bgMusic.loop = true;
bgMusic.muted = true;

async function playAfter(suatuFungsi, song) { // FUNGSI PLAY AFTER ****************************
  await suatuFungsi;
  
    let suara = 0.1
    song.play();
    song.volume = suara;
    var intervalListener = setInterval(function () {
      suara += 0.1;
      song.volume = suara;
      cekInterval();
    }, 1000);

    function cekInterval() {
      if (suara > 0.7) {
        clearInterval(intervalListener);
      }
    }
  setTimeout(function () {
    document.querySelector("body").style.backgroundColor = "rgb(226, 226, 226)";
    document.querySelector("body").style.transitionDuration = "1.5s";
    setTimeout(function () {
      document.getElementById('main-content').style.display = "flex";
      setTimeout(function () {
        document.getElementById('main-content').classList.remove('hidden2');
        mainContent = true; // last 
      }, 400);
      nav.classList.remove('hidden');
      bottom.classList.remove('hidden2');
    }, 1000);

  }, 1400);

}

async function fadeAway(objek, durations) { // FUNGSI FADEAWAY ********************************
  let janji = new Promise((resolve) => {
    setTimeout(() => resolve(objek.style.opacity = '0'), durations);
  })
  await janji;
  if (durations < 1000) {
    setTimeout(() => { (objek.style.display = 'none') }, durations * 2.8);
  } else {
    setTimeout(() => { (objek.style.display = 'none') }, durations * 0.5)
  }

};

function hideNav() {
  if (hidden) {
    nav.classList.add("hidden");
    bottom.classList.add('hidden2');
    hidden = false;
  } else {
    nav.classList.remove("hidden");
    bottom.classList.remove('hidden2');
    hidden = true;

  }
};
var alertMessage = document.getElementById('alert');
var bgAlert = document.getElementById('pop-up');
function showAlert() {
  bgAlert.style.display = 'block';
  alertMessage.classList.remove("hidden2");
};


function pauseMusic() {
  if (!pause) {
    bgMusic.pause();
    pause = true;
    document.querySelector('#alert p').innerHTML = 'Mainkan musik';
  } else {
    bgMusic.play();
    pause = false;
    document.querySelector('#alert p').innerHTML = 'Hentikan musik';
  }
};

window.addEventListener('blur', function() {
  if(mainContent) {
    bgMusic.pause();
  }  
}, false);
window.addEventListener('focus', function() {
  if(mainContent) {
    if (!pause) {
      bgMusic.play();
    }
  }
}, false);
