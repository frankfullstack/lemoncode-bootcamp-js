var hoteles = {
    Aurora: {
        name: "Boutique Aurora",
        location: "Nerja, Málaga",
        img: "../src/img/hotel-boutique-aurora.jpeg"  
    },
    Cantarero: {
      name: "Boutique Cantarero",
      location: "Nerja, Málaga",
      img: "../src/img/hotel-boutique-cantarero.jpeg"  
    }
};

var selectedHotel = prompt(
    "Indica el hotel sobre el que quiere hacer la reseña: Aurora o Cantarero",
);

document.querySelector(".hotel-wrapper").style.display = "none";

document.querySelector(".name-hotel").innerHTML =
  "Hotel " + hoteles[selectedHotel].name;

document.querySelector(".location-hotel").innerHTML =
  "Ubicado en " + hoteles[selectedHotel].location;

document.querySelector("#img-hotel").src = hoteles[selectedHotel].img;

var stars = {
    una:
      "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    dos:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    tres:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
    cuatro:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
    cinco:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
};

var rating = prompt("Puntuación: una, dos, tres, cuatro o cinco estrellas");

document.querySelector("#rating").innerHTML = stars[rating] ?? stars["una"];

var isAnonymous = confirm("¿Quieres que la reseña sea anónima?");
document.querySelector("#anonymous").checked = isAnonymous;

document.querySelector(".hotel-wrapper").style.display = "block";