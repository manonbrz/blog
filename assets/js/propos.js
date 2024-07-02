document.addEventListener("DOMContentLoaded", function() {
    // Sélectionnez l'élément span par son ID
    const spanGLEvents = document.getElementById("lien-glevents");

    // Ajoutez un événement de clic à cet élément
    spanGLEvents.addEventListener("click", function() {
    // Redirigez l'utilisateur vers le site de GL Events
    window.open("https://www.gl-events.com/fr", "_blank");
    });
});

document.querySelector('.onebis').addEventListener('click', function() {
document.getElementById('twothree').scrollIntoView({ behavior: 'smooth' });
});