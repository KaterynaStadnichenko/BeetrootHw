// const dataElement = document.querySelector('.playList');

let playList = [
  {
    author: "LED ZEPPELIN",
    song: "STAIRWAY TO HEAVEN",
  },
  {
    author: "QUEEN",
    song: "BOHEMIAN RHAPSODY",
  },
  {
    author: "LYNYRD SKYNYRD",
    song: "FREE BIRD",
  },
  {
    author: "DEEP PURPLE",
    song: "SMOKE ON THE WATER",
  },
  {
    author: "JIMI HENDRIX",
    song: "ALL ALONG THE WATCHTOWER",
  },
  {
    author: "AC/DC",
    song: "BACK IN BLACK",
  },
  {
    author: "QUEEN",
    song: "WE WILL ROCK YOU",
  },
  {
    author: "METALLICA",
    song: "ENTER SANDMAN",
  },
];

const playListDiv = document.getElementById("song-list");

playList.forEach((playListItem) => {
  const songsDiv = document.createElement("div");

  const authorName = document.createElement("p");
  authorName.textContent = playListItem.author;

  const songName = document.createElement("p");
  songName.textContent = playListItem.song;

  songsDiv.appendChild(authorName);
  songsDiv.appendChild(songName);
  playListDiv.appendChild(songsDiv);
});

function showList() {
  const modal = document.querySelector(".song-list");
  const button = document.querySelector(".show_button");

  if (modal.classList.contains("visible")) {
    button.textContent = "open";
  } else {
    button.textContent = "close";
  }
  modal.classList.toggle("visible");
}

// modal.classList.contains("visible") ? button.textContent = 'open' : button.textContent = "close"
// modal.classList.toggle("visible")
