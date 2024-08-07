// Récupération des éléments du DOM
const carousel = document.querySelector('.carousel');
const cards = document.querySelector('.cards');
const card = document.querySelectorAll('.card');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

// Fonction pour obtenir la largeur de la carte et le nombre de cartes visibles
const calculateDimensions = () => {
  if (window.innerWidth <= 950) {
    return {
      cardWidth: card[0].offsetWidth + 10, // +10 pour tenir compte des marges
      visibleCards: 1,
    };
  } else {
    return {
      cardWidth: card[0].offsetWidth + 20, // +20 pour tenir compte des marges
      visibleCards: 3,
    };
  }
};

// Initial dimensions
let { cardWidth, visibleCards } = calculateDimensions();
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

// Écouter les changements de taille de la fenêtre
window.addEventListener('resize', () => {
  const dimensions = calculateDimensions();
  cardWidth = dimensions.cardWidth;
  visibleCards = dimensions.visibleCards;
  showCards(); // Réajuster l'affichage des cartes
});

// Appel initial de la fonction pour afficher les cartes
showCards();
