/*
Consegna:
Dato un array contenente una lista di cinque immagini, 
creare un carosello come nello screenshot allegato.
*/



//preparo gli elementi in js che corrispondono all'html
const arrowUpEl = document.getElementById("arrow-up");
const arrowDownEl = document.getElementById("arrow-down");
const activeCarouselImagesEl = document.getElementById("active-carousel-images")

// array di immagini
const carouselImages = [
    "img/01.webp",
    "img/02.webp",
    "img/03.webp",
    "img/04.webp",
    "img/05.webp"];

// memorizzo una variagile di indice
let index = 0;

//inserisco in pagina di default la prima immagine dell'array
activeCarouselImagesEl.src = carouselImages[index];

arrowUpEl.addEventListener("click", function(){
    //aumenta di un'unità il valore di index preso da activeCarouselImageEl
    index++;
    //mostra l'immagine relativa al valore dell'indice corrente
    activeCarouselImagesEl.src = carouselImages[index];
});

arrowDownEl.addEventListener("click", function(){
    //diminuisco di un'unità il valore di index preso da activeCarouselImageEl
    index--;
    //mostra l'immagine relativa al valore dell'indice corrente
    activeCarouselImagesEl.src = carouselImages[index];
});

