// Annimation icone de navigation hover 
const icon_moves = document.querySelectorAll('.nav-left a');

icon_moves.forEach(icon_move => {
  const icon_i = icon_move.querySelector('i');
  icon_move.addEventListener('mouseenter', () => {
    icon_i.classList.add('nav-left-move-icon');
  });
  icon_move.addEventListener('mouseleave', () => {
    icon_i.classList.remove('nav-left-move-icon');
  });
});

//langue select
const select = document.getElementById('select-langue');
const malagasy = document.querySelector('.type-malagasy');
const francais = document.querySelector('.type-francais');
const anglais = document.querySelector('.type-anglais');
const allemand = document.querySelector('.type-allemand');
const espaniol = document.querySelector('.type-espaniol');
const chinois = document.querySelector('.type-chinois');
let selectedIndex = 0;
let intervalId;

// Fonction pour lancer l'animation à partir de l'option sélectionnée
function launchAnimationFromSelectedIndex() {
  // Masquer tous les éléments
  malagasy.classList.add('d-none');
  francais.classList.add('d-none');
  anglais.classList.add('d-none');
  allemand.classList.add('d-none');
  espaniol.classList.add('d-none');
  chinois.classList.add('d-none');
  // Afficher l'élément correspondant à l'option sélectionnée
  const selectedOptionValue = select.options[select.selectedIndex].value;
  if (selectedOptionValue === 'MALAGASY') {
    malagasy.classList.remove('d-none');
  } else if (selectedOptionValue === 'FRANCAIS') {
    francais.classList.remove('d-none');
  } else if (selectedOptionValue === 'ANGLAIS') {
    anglais.classList.remove('d-none');
  } else if (selectedOptionValue === 'ALLEMAND') {
    allemand.classList.remove('d-none');
  } else if (selectedOptionValue === 'ESPAGNIOL') {
    espaniol.classList.remove('d-none');
  } else if (selectedOptionValue === 'CHINOIS') {
    chinois.classList.remove('d-none');
  }
  // Mettre à jour l'index de l'option sélectionnée
  selectedIndex = select.selectedIndex;
  // Arrêter l'animation s'il est en cours
  clearInterval(intervalId);
  // Lancer l'animation à partir de l'option sélectionnée
  intervalId = setInterval(function () {
    selectedIndex++;
    if (selectedIndex >= select.options.length) {
      selectedIndex = 0;
    }
    select.selectedIndex = selectedIndex;
    launchAnimationFromSelectedIndex();
  }, 5000);
}

// Lancer l'animation dès le chargement de la page
launchAnimationFromSelectedIndex();

// Gérer le changement de sélection manuelle
select.onchange = function () {
  launchAnimationFromSelectedIndex();
};



// voir plus sur projets dans  potfolio
const projet_tesla = document.querySelector(".Testla-p1");
const vitslie_p2 = document.querySelector(".vitslie-p2");
const Tarazo_p3 = document.querySelector(".Tarazo-p3");

const voir_p1 = document.querySelector('.projet1 button');
const voir_p2 = document.querySelector('.projet2 button');
const voir_p3 = document.querySelector('.projet3 button');

const close_p1 = document.querySelector('.Testla-p1 i');
const close_p2 = document.querySelector('.vitslie-p2 i');
const close_p3 = document.querySelector('.Tarazo-p3 i');
//voir
voir_p1.addEventListener('click', function () {
  projet_tesla.classList.remove('d-none');
  vitslie_p2.classList.add('d-none');
  Tarazo_p3.classList.add('d-none');
});

voir_p2.addEventListener('click', function () {
  projet_tesla.classList.add('d-none');
  vitslie_p2.classList.remove('d-none');
  Tarazo_p3.classList.add('d-none');
});

voir_p3.addEventListener('click', function () {
  projet_tesla.classList.add('d-none');
  vitslie_p2.classList.add('d-none');
  Tarazo_p3.classList.remove('d-none');
});

//fermer
close_p1.addEventListener('click', function () {
  projet_tesla.classList.add('d-none');
});

close_p2.addEventListener('click', function () {
  vitslie_p2.classList.add('d-none');
});

close_p3.addEventListener('click', function () {
  Tarazo_p3.classList.add('d-none');
});

//voir menu sur mobile
const voir_menu = document.querySelector('.menu-icon');
const nav_mobile = document.querySelector('.nav-bottom-container');
const nav_quitter = document.querySelectorAll('.nav-bottom-container nav a');

voir_menu.addEventListener('click', function (e) {
  nav_mobile.classList.toggle('d-none');
  e.preventDefault();
});

nav_quitter.forEach(nav_quitter => {
  nav_quitter.addEventListener("click", function (e) {
    nav_mobile.classList.toggle('d-none');
  });
});

//Apparition pour scroll

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });

});
const hiddenElement = document.querySelectorAll(".hidden");
hiddenElement.forEach((el) => observer.observe(el));