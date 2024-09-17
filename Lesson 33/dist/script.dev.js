"use strict";

// const dataElement = document.querySelector('.playList');
// let playList = [
//     {
//      author: "LED ZEPPELIN",
//      song:"STAIRWAY TO HEAVEN"
//     },
//     {
//      author: "QUEEN",
//      song:"BOHEMIAN RHAPSODY"
//     },
//     {
//      author: "LYNYRD SKYNYRD",
//      song:"FREE BIRD"
//     },
//     {
//      author: "DEEP PURPLE",
//      song:"SMOKE ON THE WATER"
//     },
//     {
//      author: "JIMI HENDRIX",
//      song:"ALL ALONG THE WATCHTOWER"
//     },
//     {
//      author: "AC/DC",
//      song:"BACK IN BLACK"
//     },
//     {
//      author: "QUEEN",
//      song:"WE WILL ROCK YOU"
//     },
//     {
//      author: "METALLICA",
//      song:"ENTER SANDMAN"
//     }
//     ];
function showList() {
  var modal = document.querySelector(".modal");
  var button = document.querySelector(".show_button");
  modal.classList.contains("visible") ? button.textContent = 'open' : button.textContent = "close";
  modal.classList.toggle("visible");
}