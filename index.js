"use strict";

import { slides, images_bg } from './data.js';

const interval = 5000;
let currentIndex = 0;
const imgElement = document.getElementById("img_banner");

function changeImage() {
  imgElement.src = "images/" + images_bg[currentIndex];
  currentIndex = (currentIndex + 1) % images_bg.length;
}

setInterval(changeImage, interval);

const contain = document.querySelectorAll(".image_arrow_card");
console.log(contain);

for (let i = 0; i < contain.length; i++) {
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

const contourMenu = document.querySelector("#contour_menu");

contourMenu.addEventListener("click", (e) => {
    const div_list = document.querySelector("#list_header");

    if (div_list.style.display == "block") {
        div_list.style.display = "none";
    } else {
        div_list.style.display = "block";
    }
});

function isElementInViewport() {
    const el = document.querySelector("#img_card_4");
    const rect = el.getBoundingClientRect();
    const container = document.createElement('div');
    const insertedContent = `<div id="main_deux_partie">
    <div class="card_voiture">
        <div class="image_arrow_card">
            <i class="fa-solid fa-circle-chevron-left arrow_left"></i>
            <img src="images/vehicule1.png" id="img_card_5" alt="voiture 5">
            <i class="fa-solid fa-circle-chevron-right arrow_right"></i>
        </div>
        <aside>
        <div class="description">
        <h2 id="titre_card5">Peugeot 208</h2>
        <p>Diesel, 5 portes, GPS, AutoRadio Forfait 1000km (0.5/km supplémentaire)<br><span id="prix_card1">999</span>€ - Agence de Paris</p>
        </div>
            
            <button class="reserver_button">Réserver et payer</button>
        </aside>
    </div>

    <div class="card_voiture">
        <div class="image_arrow_card">
            <i class="fa-solid fa-circle-chevron-left arrow_left"></i>
            <img src="images/vehicule1.png" id="img_card_5" alt="voiture 6">
            <i class="fa-solid fa-circle-chevron-right arrow_right"></i>
        </div>
        <aside>
        <div class="description">
        <h2 id="titre_card5">Peugeot 208</h2>
            <p>Diesel, 5 portes, GPS, AutoRadio Forfait 1000km (0.5/km supplémentaire)<br><span id="prix_card1">999</span>€ - Agence de Paris</p>
        </div>
            
            <button class="reserver_button">Réserver et payer</button>
        </aside>
    </div>

    <div class="card_voiture">
        <div class="image_arrow_card">
            <i class="fa-solid fa-circle-chevron-left arrow_left"></i>
            <img src="images/vehicule1.png" id="img_card_5" alt="voiture 7">
            <i class="fa-solid fa-circle-chevron-right arrow_right"></i>
        </div>
        <aside>
        <div class="description">
        <h2 id="titre_card5">Peugeot 208</h2>
            <p>Diesel, 5 portes, GPS, AutoRadio Forfait 1000km (0.5/km supplémentaire)<br><span id="prix_card1">999</span>€ - Agence de Paris</p>
        </div>
            <button class="reserver_button">Réserver et payer</button>
        </aside>
    </div>


    <div class="card_voiture">
        <div class="image_arrow_card">
            <i class="fa-solid fa-circle-chevron-left arrow_left"></i>
            <img src="images/vehicule1.png" id="img_card_5" alt="voiture 8">
            <i class="fa-solid fa-circle-chevron-right arrow_right"></i>
        </div>
        <aside>
        <div class="description">
        <h2 id="titre_card5">Peugeot 208</h2>
            <p>Diesel, 5 portes, GPS, AutoRadio Forfait 1000km (0.5/km supplémentaire)<br><span id="prix_card1">999</span>€ - Agence de Paris</p>
        </div>
            
            <button class="reserver_button">Réserver et payer</button>
        </aside>
    </div>
</div>`
    container.innerHTML = insertedContent;
    console.log(rect.top <= window.screen.height);
    if (rect.top <= window.screen.height) {
        console.log('test')
        window.removeEventListener("scroll", handleScroll);
        console.log('test after remove')
        document.querySelector('main').insertAdjacentElement('beforeend', container);

        const container2 = document.querySelectorAll("#main_deux_partie .image_arrow_card");
        for (let i = 0; i < 4; i++) {
            createCarousel(container2[i]);
            console.log("carrou");
            console.log(container2[i]);
            console.log(container2.length);
        }
    }
}

window.addEventListener("scroll", handleScroll);



document.getElementById("myForm").addEventListener("submit", (event) => {
    event.preventDefault();

    // Récupération des valeurs des champs
    const lieuDepartValue = document.getElementById("select_form").value;
    const dateDebutValue = document.getElementById("dateDebut").value;
    const dateFinValue = document.getElementById("dateFin").value;


    sessionStorage.setItem("lieuDepart", lieuDepartValue);
    sessionStorage.setItem("dateDebut", dateDebutValue);
    sessionStorage.setItem("dateFin", dateFinValue);

});