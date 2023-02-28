/*
Consegna:
Dato un array contenente una lista di cinque immagini, 
creare un carosello come nello screenshot allegato.
*/



//preparo gli elementi in js che corrispondono all'html
const arrowUpEl = document.getElementById("arrow-up");
const arrowDownEl = document.getElementById("arrow-down");
const activeCarouselImagesEl = document.getElementById("active-carousel-images")
const miniatureImageContainerEl = document.getElementById("miniature-image-container");
const arrowContainerEl = document.querySelector(".arrow-container");

// array di immagini
const carouselImages = [
    "img/01.webp",
    "img/02.webp",
    "img/03.webp",
    "img/04.webp",
    "img/05.webp"];

let newMiniatureEl;

// genero le miniature delle immagini
for(let i = 0; i < carouselImages.length; i++){
    let newMiniatureEl = document.createElement("img");
    newMiniatureEl.classList.add("miniature-image");
    miniatureImageContainerEl.append(newMiniatureEl);
    newMiniatureEl.src = carouselImages[i];   
}


// memorizzo una variabile di indice
let index = 0;

//inserisco in pagina di default la prima immagine dell'array
activeCarouselImagesEl.src = carouselImages[index];

//prendo le miniature-image
let miniatureImageEl = document.querySelectorAll(".miniature-image");
//aggiungo al primo la classe active
miniatureImageEl[index].classList.add("active");


arrowDownEl.addEventListener("click", function(){
    //aumenta di un'unità il valore di index preso da activeCarouselImageEl
    index++;

    //aggiungo la classe active alla miniatura corrispondente all'indice
    miniatureImageEl[index].classList.add("active");
    //mostra l'immagine relativa al valore dell'indice corrente
    activeCarouselImagesEl.src = carouselImages[index];

    //rimuovo la classe active alla miniatura corrispondente all'indice - 1
    miniatureImageEl[index - 1].classList.remove("active");
});

arrowUpEl.addEventListener("click", function(){
    //diminuisco di un'unità il valore di index preso da activeCarouselImageEl
    index--;
    //aggiungo la classe active alla miniatura corrispondente all'indice
    miniatureImageEl[index].classList.add("active");
    //mostra l'immagine relativa al valore dell'indice corrente
    activeCarouselImagesEl.src = carouselImages[index];
    //rimuovo la classe active alla miniatura corrispondente all'indice - 1
    miniatureImageEl[index + 1].classList.remove("active");
});

