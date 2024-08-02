document.addEventListener("DOMContentLoaded", function () {
  // Détecter le chemin relatif en fonction de l'emplacement de la page actuelle
  const currentPath = window.location.pathname;
  const isHomepage = currentPath === '/' || currentPath === '/home';
  const isInPagesFolder = currentPath.includes('/pages/');
  const homepagePath = isHomepage ? '' : '../';
  const pathToPages = isInPagesFolder ? '' : '';

  // Créer le HTML de la barre de navigation avec les chemins appropriés
  const navHtml = `
    <div class="navbar--container sticky">
      <div class="navbar--title"><h4>LE BARAZER MANON</h4></div>
      <div class="navbar--icon"><i class="fas fa-bars"></i></div>
    </div>
    <div class="nav--open close sticky">
      <div class="nav--open-icon"><i class="fas fa-times"></i></div>
      <div class="nav--open-title">le barazer manon</div>
      <div class="nav--open-menu">
        <a href="${homepagePath}home">home</a>
        <a href="${pathToPages}propos">à propos</a>
        <a href="${pathToPages}article">articles</a>
        <a href="${pathToPages}entreprise">entreprise</a>
        <a href="${pathToPages}contact">contact</a>
      </div>
    </div>`;

  // Insérer le HTML de la barre de navigation dans l'élément placeholder
  document.getElementById('nav-placeholder').innerHTML = navHtml;

  // Ajout des événements pour ouvrir et fermer le menu de navigation
  let open = document.querySelector(".navbar--icon");
  let menu = document.querySelector(".nav--open");
  let close = document.querySelector(".nav--open-icon");

  open.addEventListener("click", function () {
    menu.classList.toggle("close");
  });

  close.addEventListener("click", function () {
    menu.classList.toggle("close");
  });
});
