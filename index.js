const bodyHtml = document.getElementById("bodyHtml");

const openButton = document.getElementById("openGalery");

const displayImgHtml = document.getElementById("displayImgHtml");

const previousButton = document.getElementById("previousButton");
const displayImg = document.getElementById("display");
const nextButton = document.getElementById("nextButton");
const closeButton = document.getElementById("closeGalery");

function openDisplayImg () {
    displayImgHtml.style.display = "flex";
    bodyHtml.style.overflow = "hidden";
}

const imagesList = [
    "https://pbs.twimg.com/media/GfusP1xWUAASbDE?format=jpg&name=large", "https://pbs.twimg.com/media/GfusP0QWEAAaWbA?format=jpg&name=large", "https://pbs.twimg.com/media/GfusJQoWQAAim37?format=jpg&name=large", "https://pbs.twimg.com/media/GfusJNSX0AAh64_?format=jpg&name=large", "https://pbs.twimg.com/media/GfusJQiWAAAct5z?format=jpg&name=large", "https://pbs.twimg.com/media/GfusJNUWYAAdFH4?format=jpg&name=large"
];

let index = 0;

displayImg.src = imagesList[index];

function PreviousImage () {
    index--;
    displayImg.src = imagesList[index];
    if (index < 0) {
        index = imagesList.length -1;
        displayImg.src = imagesList[index];
    } else {
        displayImg.src = imagesList[index];
    }
}

function nextImage () {
    index++;
    displayImg.src = imagesList[index];
    if (index > imagesList.length - 1) {
        index = 0;
        displayImg.src = imagesList[index];
    } else {
        displayImg.src = imagesList[index];
    }
}

function closeDisplayImg () {
    displayImgHtml.style.display = "none";
    bodyHtml.style.overflow = "scroll";
}

openButton.addEventListener("click", openDisplayImg);
previousButton.addEventListener("click", PreviousImage);
nextButton.addEventListener("click", nextImage);
closeButton.addEventListener("click", closeDisplayImg);