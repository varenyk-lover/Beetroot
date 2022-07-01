const switchButton = document.getElementById("change-color-button");
let clicks = 1;
const redLight = document.getElementById('red-light');
const yellowLight = document.getElementById('yellow-light');
const greenLight = document.getElementById('green-light');

switchButton.addEventListener("click", () => {

    if (clicks === 1) {
        redLight.style.backgroundColor = "red";
        yellowLight.style.backgroundColor = "rgb(64, 64, 64)";
        greenLight.style.backgroundColor = "rgb(64, 64, 64)";
    } else if (clicks === 2) {
        redLight.style.backgroundColor = "rgb(64, 64, 64)";
        yellowLight.style.backgroundColor = "yellow";
        greenLight.style.backgroundColor = "rgb(64, 64, 64)";
    } else if (clicks === 3) {
        redLight.style.backgroundColor = "rgb(64, 64, 64)";
        yellowLight.style.backgroundColor = "rgb(64, 64, 64)";
        greenLight.style.backgroundColor = "green";
    } else return;
    clicks++
})


