const progress = document.getElementById("progress");
const song = document.getElementById("song");
const controlIcon = document.getElementById("controlIcon");
const playPauseButton = document.querySelector(".play-pause-btn");
const forwardButton = document.querySelector(".controls button.forward");
const backwardButton = document.querySelector(".controls button.backward");
const songName = document.querySelector(".music-player h1");
const artistName = document.querySelector(".music-player p");

const songs = [
  {
    title: "Alag-Aasmaan",
    name: "Anuv Jain",
    source:
      "/music/Alag-Aasmaan.mp3",
  },
  {
    title: "Husn",
    name: "Anuv Jain",
    source:
      "/music/Husn.mp3",
  },
  {
    title: "Pehla Pyaar",
    name: "Armaan Malik",
    source:
    "/music/Pehla-Pyaar .mp3",
  },
  {
    title: "Iraaday",
    name: "Abdul Hannan",
    source:
      "/music/Iraaday.mp3",
  },
  
  {
    title: "Waqt Ki Baatein",
    name: "Dream Nate",
    source:
      "/music/Waqt Ki Baatein.mp3",
  },
  {
    title: "Teri Yaad",
    name: "Aditya Rikhari",
    source:
      "/music/Teri-Yaad.mp3",
  },
  {
    title: "Phir Kabhi",
    name: "Amaal Mallik and Arijit Singh",
    source:
      "/music/Phir-Kabhi.mp3",
  },
  {
    title: "Tu hai Kahan",
    name: "Uraan",
    source:
      "/music/Tu-Hai-Kahan.mp3",
  },
  {
    title: "We don't talk Anymore",
    name: "Charlie Puth",
    source:
      "/music/We-Don't-Talk-Anymore.mp3",
  },
  {
    title: "Tu Hi Hai Aashiqui",
    name: "Arjit Singh",
    source:
      "/music/Tu-Hi-Hai-Aashiqui.mp3",
  },
  {
    title: " Choo Lo",
    name: "The Local Train",
    source:
      "/music/Choo Lo.mp3",
  },
  {
    title: "Pehle Bhi Main",
    name: "Vishal Mishra",
    source:
      "/music/Pehle Bhi Main.mp3",
  },
  {
    title: "Main Tumhara",
    name: "A.R. Rahman",
    source:
      "/music/Main Tumhara.mp3",
  },
  

 
];

let currentSongIndex = 3;

function updateSongInfo() {
  songName.textContent = songs[currentSongIndex].title;
  artistName.textContent = songs[currentSongIndex].name;
  song.src = songs[currentSongIndex].source;

  song.addEventListener("loadeddata", function () {});
}

song.addEventListener("timeupdate", function () {
  if (!song.paused) {
    progress.value = song.currentTime;
  }
});

song.addEventListener("loadedmetadata", function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
});

function pauseSong() {
  song.pause();
  controlIcon.classList.remove("fa-pause");
  controlIcon.classList.add("fa-play");
}

function playSong() {
  song.play();
  controlIcon.classList.add("fa-pause");
  controlIcon.classList.remove("fa-play");
}

function playPause() {
  if (song.paused) {
    playSong();
  } else {
    pauseSong();
  }
}

playPauseButton.addEventListener("click", playPause);

progress.addEventListener("input", function () {
  song.currentTime = progress.value;
});

progress.addEventListener("change", function () {
  playSong();
});

forwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  updateSongInfo();
  playPause();
});

backwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  updateSongInfo();
  playPause();
});

updateSongInfo();

var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  centeredSlides: true,
  initialSlide: 3,
  slidesPerView: "auto",
  allowTouchMove: false,
  spaceBetween: 40,
  coverflowEffect: {
    rotate: 25,
    stretch: 0,
    depth: 50,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".forward",
    prevEl: ".backward",
  },
});


