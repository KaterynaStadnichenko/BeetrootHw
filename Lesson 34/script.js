document.addEventListener("keydown", (event) => {
    console.log(event.ctrlKey)
  
    if(event.code === "KeyE" && event.ctrlKey) {
        event.preventDefault()
        const textAreaEdit = document.getElementById('textEditor')
        textAreaEdit.classList.add("visible")

        const makeTextVisible = document.getElementById("display")
        makeTextVisible.classList.add("hidden")
        textAreaEdit.value = makeTextVisible.textContent
    }
    if (event.code === "KeyS" && event.ctrlKey) {
        event.preventDefault()

        const textAreaEdit = document.getElementById('textEditor');
        const displayArea = document.getElementById("display");

        displayArea.textContent = textAreaEdit.value; 
        textAreaEdit.value = ""; 
        
        textAreaEdit.classList.remove("visible"); 
    }
});

