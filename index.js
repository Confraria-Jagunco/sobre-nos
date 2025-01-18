const bodyHtml = document.getElementById("bodyHtml");

const openButton = document.getElementById("openGalery");

const displayImgHtml = document.getElementById("displayImgHtml");

const previousButton = document.getElementById("previousButton");
const displayImg = document.getElementById("display");
const nextButton = document.getElementById("nextButton");
const closeButton = document.getElementById("closeGalery");

const linkHeaderToHome = document.getElementById("headerToHome");
const linkFooterToHome = document.getElementById("footerToHome");

function linkToHomePage () {
    window.open("https://confraria-jagunco.github.io/home/");
};

function openDisplayImg () {
    displayImgHtml.style.display = "flex";
    bodyHtml.style.overflow = "hidden";
};

const imagesList = [
    "https://i.imgur.com/56IUsxI.jpeg", "https://i.imgur.com/Vn9lQJG.jpeg", "https://i.imgur.com/yqOkDOh.jpeg", "https://i.imgur.com/CTmHbm6.jpeg", "https://i.imgur.com/6xJCjOB.jpeg", "https://i.imgur.com/oS4Enxo.jpeg"
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
    };
};

function nextImage () {
    index++;
    displayImg.src = imagesList[index];
    if (index > imagesList.length - 1) {
        index = 0;
        displayImg.src = imagesList[index];
    } else {
        displayImg.src = imagesList[index];
    };
};

function closeDisplayImg () {
    displayImgHtml.style.display = "none";
    bodyHtml.style.overflow = "scroll";
};

linkHeaderToHome.addEventListener("click", linkToHomePage);
linkFooterToHome.addEventListener("click", linkToHomePage);

openButton.addEventListener("click", openDisplayImg);
previousButton.addEventListener("click", PreviousImage);
nextButton.addEventListener("click", nextImage);
closeButton.addEventListener("click", closeDisplayImg);
