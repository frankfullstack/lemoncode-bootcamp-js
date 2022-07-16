let nameInput = document.querySelector(".input-name");
let lastnameInput = document.querySelector(".input-lastname")
let image = document.querySelector("img");

nameInput.value = "Francisco José";
lastnameInput.value = "Reyes Peralta";
image.src = "../img/avatar.jpeg"

let button = document.querySelector(".save-button")

function showData() {
    console.log(lastnameInput.value + ", " + nameInput.value)
}
