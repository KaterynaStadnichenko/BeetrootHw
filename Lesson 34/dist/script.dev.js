"use strict";

document.addEventListener("keydown", function (event) {
  console.log(event.ctrlKey);

  if (event.code === "KeyE" && event.ctrlKey) {
    event.preventDefault();
    var textAreaEdit = document.getElementById('textEditor');
    textAreaEdit.classList.add("visible");
    var makeTextVisible = document.getElementById("display");
    makeTextVisible.classList.add("hidden");
    textAreaEdit.value = makeTextVisible.textContent;
  }

  if (event.code === "KeyS" && event.ctrlKey) {
    event.preventDefault();

    var _textAreaEdit = document.getElementById('textEditor');

    var displayArea = document.getElementById("display");
    displayArea.textContent = _textAreaEdit.value;
    _textAreaEdit.value = "";

    _textAreaEdit.classList.remove("visible");
  }
});