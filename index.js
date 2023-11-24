"use strict";
import {slides, images_bg } from './data.js';



/*const slides = [
  {
    image: "vehicule1.png",
  },
  {
    image: "vehicule2.png",
  },
  {
    image: "vehicule3.png",
  },
  {
    image: "vehicule4.png",
  },
];

const images = [
    "background1.jpg",
    "background.jpg"
];*/

const interval = 5000;

let currentIndex = 0;
const imgElement = document.getElementById("img_banner");

function changeImage() {
  imgElement.src = "images/"+images_bg[currentIndex];
  currentIndex = (currentIndex + 1) % images_bg.length;
}

setInterval(changeImage, interval);


const contain = document.querySelectorAll(".image_arrow_card");
console.log(contain);

for(let i = 0;i < contain.length;i++){
    createCarousel(contain[i]);
}



function createCarousel(container) {
    const interval = 5000;
    let currentIndex = 0;
    const imgElement = container.querySelector("img");
    const arrowRight = container.querySelector(".arrow_right");
    const arrowLeft = container.querySelector(".arrow_left");
    console.log(arrowLeft);
    console.log(arrowRight);


    let img_selected = 0;

    arrowRight.addEventListener("click", (e) => {
        
        if (img_selected == 3) {
            img_selected = 0;
          } else {
            img_selected++;
          }
          imgElement.src = "images/" + slides[img_selected].image;
          
          console.log(imgElement.src);
    });

    arrowLeft.addEventListener("click", (e) => {
        if (img_selected == 0) {
            img_selected = 3;
          } else {
            img_selected--;
          }
        
          imgElement.src = "images/" + slides[img_selected].image;
          console.log(imgElement.src);
        console.log(imgElement.src);
    });
}

const handleScroll = (e) => isElementInViewport();

function isElementInViewport() {
    const el = document.querySelector("#img_card_4");
    const rect = el.getBoundingClientRect();
    const container = document.createElement('div');
    const insertedContent = `<div class="card_voiture">
    <div class="image_arrow_card">
        <i class="fa-solid fa-circle-chevron-left arrow_left"></i>
        <img src="images/vehicule1.png" id="img_card_5" alt="voiture 1">
        <i class="fa-solid fa-circle-chevron-right arrow_right"></i>
    </div>
    <aside>
        <h2 id="titre_card5">Peugeot 208</h2>
        <p>Diesel, 5 portes, GPS, AutoRadio Forfait 1000km (0.5/km supplémentaire)<br><span id="prix_card1">999</span>€ - Agence de Paris</p>
        <button class="reserver_button">Réserver et payer</button>
    </aside>
</div>

<div class="card_voiture">
    <div class="image_arrow_card">
        <i class="fa-solid fa-circle-chevron-left arrow_left"></i>
        <img src="images/vehicule1.png" id="img_card_5" alt="voiture 1">
        <i class="fa-solid fa-circle-chevron-right arrow_right"></i>
    </div>
    <aside>
        <h2 id="titre_card5">Peugeot 208</h2>
        <p>Diesel, 5 portes, GPS, AutoRadio Forfait 1000km (0.5/km supplémentaire)<br><span id="prix_card1">999</span>€ - Agence de Paris</p>
        <button class="reserver_button">Réserver et payer</button>
    </aside>
</div>

<div class="card_voiture">
    <div class="image_arrow_card">
        <i class="fa-solid fa-circle-chevron-left arrow_left"></i>
        <img src="images/vehicule1.png" id="img_card_5" alt="voiture 1">
        <i class="fa-solid fa-circle-chevron-right arrow_right"></i>
    </div>
    <aside>
        <h2 id="titre_card5">Peugeot 208</h2>
        <p>Diesel, 5 portes, GPS, AutoRadio Forfait 1000km (0.5/km supplémentaire)<br><span id="prix_card1">999</span>€ - Agence de Paris</p>
        <button class="reserver_button">Réserver et payer</button>
    </aside>
</div>


<div class="card_voiture">
    <div class="image_arrow_card">
        <i class="fa-solid fa-circle-chevron-left arrow_left"></i>
        <img src="images/vehicule1.png" id="img_card_5" alt="voiture 1">
        <i class="fa-solid fa-circle-chevron-right arrow_right"></i>
    </div>
    <aside>
        <h2 id="titre_card5">Peugeot 208</h2>
        <p>Diesel, 5 portes, GPS, AutoRadio Forfait 1000km (0.5/km supplémentaire)<br><span id="prix_card1">999</span>€ - Agence de Paris</p>
        <button class="reserver_button">Réserver et payer</button>
    </aside>
</div>`
container.innerHTML = insertedContent;
    console.log(rect.top <= window.screen.height);
    if(rect.top <= window.screen.height){
        console.log('test')
        window.removeEventListener("scroll", handleScroll);
        console.log('test after remove')
        document.querySelector('main').insertAdjacentElement('beforeend',container);
        
    }
}




// Ajout de l'écouteur d'événements scroll
window.addEventListener("scroll", handleScroll);

// Retrait de l'écouteur d'événements scroll

