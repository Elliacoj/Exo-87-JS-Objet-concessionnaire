let voiture = {
    nom : "Eggo",
    imgUrl : "https://images.caradisiac.com/logos/9/9/8/2/159982/S7-Citroen-Eggo-concept-de-citadine-du-futur-73689.jpg",
    nombresRoues : 4,
    couleur : "Marron",
    contructeur : "Citroen",
    carburant : "Solaire",
    nombrePortes : 3,
    autonomie : "450km",
    vitesseMaxi : "120km/h"
};

let div = document.createElement("div");
document.body.append(div);
let image = document.createElement("img");
document.body.append(image);

div.innerHTML =
    "Propriété de la voiture" + "<br>" +
    "Son nom: " + voiture.nom + "<br>" +
    "Son nombre de roues: " + voiture.nombresRoues + "<br>" +
    "Sa couleur: " + voiture.couleur + "<br>" +
    "Son constructeur: " + voiture.contructeur + "<br>" +
    "Son type de carburant: " + voiture.carburant + "<br>" +
    "Son nombre de portes: " + voiture.nombrePortes + "<br>" +
    "Son autonomie: " + voiture.autonomie + "<br>" +
    "Sa vitesse maximum: " + voiture.vitesseMaxi;

document.body.style.width = "100%";
image.src = voiture.imgUrl;
image.style.width = "30%";
image.style.height = "200px";