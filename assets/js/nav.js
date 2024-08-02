document.addEventListener("DOMContentLoaded", function () {
  const homepagePath = window.location.pathname === '/' ? '' : '../';
  const pathToPages = window.location.pathname.includes('/pages/') ? '' : 'pages';

  const navHtml = `<div class="navbar--container sticky">
    <div class="navbar--title"><h4>LE BARAZER MANON</h4></div>
    <div class="navbar--icon"><i class="fas fa-bars"></i></div>
  </div>
  <div class="nav--open close sticky">
    <div class="nav--open-icon"><i class="fas fa-times"></i></div>
    <div class="nav--open-title">le barazer manon</div>
    <div class="nav--open-menu">
      <a href="${homepagePath}index.html">home</a>
      <a href="${pathToPages}/propos.html">à propos</a>
      <a href="${pathToPages}/article.html">articles</a>
      <a href="${pathToPages}/entreprise.html">entreprise</a>
      <a href="${pathToPages}/article.html">contact</a>
    </div>
  </div>`;

  document.getElementById('nav-placeholder').innerHTML = navHtml;

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
