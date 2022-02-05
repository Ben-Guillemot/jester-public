const app = {

  // fonction d'initialisation, lancée au chargement de la page
  init: function () {
    app.addListenerToActions();
  },

  addListenerToActions() {
    const burgerMenu = document.querySelector('.burger-menu__button');
    burgerMenu.addEventListener('click', app.showMenu);

    const overlay = document.querySelector('.menu-overlay');
    overlay.addEventListener('click', app.hideMenu);
  },

  showMenu() {
    const headerElem = document.querySelector('.header');
    const overlay = document.querySelector(".menu-overlay");
    headerElem.classList.add('menu-open');
    overlay.style.display = "block";
  },

  hideMenu() {
    const headerElem = document.querySelector('.header');
    const overlay = document.querySelector(".menu-overlay");
    headerElem.classList.remove('menu-open');
    overlay.style.display = "none";
  }

};

document.addEventListener('DOMContentLoaded', app.init );