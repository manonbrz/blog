// Récupération des éléments du DOM
const carousel = document.querySelector('.carousel');
const cards = document.querySelector('.cards');
const card = document.querySelectorAll('.card');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

// Nombre de cartes à afficher à la fois
const cardWidth = card[0].offsetWidth + 20; // +20 pour tenir compte des marges
const visibleCards = 3;
let currentSlide = 0;

// Fonction pour afficher les cartes
const showCards = () => {
  cards.style.transform = `translateX(${-currentSlide * cardWidth}px)`;
};

// Bouton suivant
nextButton.addEventListener('click', () => {
  if (currentSlide < card.length - visibleCards) {
    currentSlide++;
  } else {
    currentSlide = 0; // Retourner au début pour l'effet de carousel infini
  }
  showCards();
});

// Bouton précédent
prevButton.addEventListener('click', () => {
  if (currentSlide > 0) {
    currentSlide--;
  } else {
    currentSlide = card.length - visibleCards; // Aller à la fin pour l'effet de carousel infini
  }
  showCards();
});

// Appel initial de la fonction pour afficher les cartes
showCards();