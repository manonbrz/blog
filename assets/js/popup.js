// Fonction pour afficher la popup
function showPopup(imageSrc, title, subtitle, time, additionalText) {
    const popup = document.getElementById('popup');
    document.getElementById('popup-image').src = imageSrc;
    document.getElementById('popup-title').textContent = title;
    document.getElementById('popup-subtitle').textContent = subtitle;
    document.getElementById('popup-time').textContent = time;
    document.getElementById('popup-additional-text').textContent = additionalText;
    popup.style.display = 'block';
}

// Fonction pour fermer la popup
function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}

// Ajout des événements pour ouvrir et fermer la popup
document.addEventListener('DOMContentLoaded', (event) => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
        card.addEventListener('click', () => {
            const imageSrc = card.querySelector('img').src;
            const title = card.querySelector('.title').textContent;
            const subtitle = card.querySelector('.subtitle').textContent;
            const time = card.querySelector('.time').textContent;
            const additionalText = card.querySelector('.additional-text p').textContent;
            showPopup(imageSrc, title, subtitle, time, additionalText);
        });
    });

    const closeBtn = document.querySelector('.close');
    closeBtn.addEventListener('click', closePopup);

    window.addEventListener('click', (event) => {
        const popup = document.getElementById('popup');
        if (event.target === popup) {
            closePopup();
        }
    });
});
