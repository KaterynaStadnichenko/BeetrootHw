"use strict";

// const dataElement = document.querySelector('.playList');
var playList = [{
  author: "LED ZEPPELIN",
  song: "STAIRWAY TO HEAVEN"
}, {
  author: "QUEEN",
  song: "BOHEMIAN RHAPSODY"
}, {
  author: "LYNYRD SKYNYRD",
  song: "FREE BIRD"
}, {
  author: "DEEP PURPLE",
  song: "SMOKE ON THE WATER"
}, {
  author: "JIMI HENDRIX",
  song: "ALL ALONG THE WATCHTOWER"
}, {
  author: "AC/DC",
  song: "BACK IN BLACK"
}, {
  author: "QUEEN",
  song: "WE WILL ROCK YOU"
}, {
  author: "METALLICA",
  song: "ENTER SANDMAN"
}];
var playListDiv = document.getElementById("song-list");
playList.forEach(function (playListItem) {
  var songsDiv = document.createElement("div");
  var authorName = document.createElement("p");
  authorName.textContent = playListItem.author;
  var songName = document.createElement("p");
  songName.textContent = playListItem.song;
  songsDiv.appendChild(authorName);
  songsDiv.appendChild(songName);
  playListDiv.appendChild(songsDiv);
});

function showList() {
  var modal = document.querySelector(".song-list");
  var button = document.querySelector(".show_button");

  if (modal.classList.contains("visible")) {
    button.textContent = "open";
  } else {
    button.textContent = "close";
  }

  modal.classList.toggle("visible");
} // modal.classList.contains("visible") ? button.textContent = 'open' : button.textContent = "close"
// modal.classList.toggle("visible")