const body = document.querySelector("body");

const IMG_NUMBER = 4;


function paintImages(imgNumber) {
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
}

function genRandom() {
    const number = Math.floor(Math.random() * 4);
    return number;
}

function init() {
    const randomNumber = genRandom();
    paintImages(randomNumber);
}
init();