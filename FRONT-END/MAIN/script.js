// Adăugare parteneri
const parteneri = [
    { name: "VitaminAqua", logo: "assets/logo-vitamin-aqua.png" },
    { name: "CreamDream", logo: "assets/logo-cream-dream.img" },
    { name: "PizzaHut", logo: "assets/logo-pizza-hut.png" },
    { name: "Alka", logo: "assets/logo-alka.png" },
  ];

const slider = document.getElementById("parteneri-slider");

parteneri.forEach(partener => {
  const div = document.createElement("div");
  div.classList.add("partener");
  div.innerHTML = `<img src="${partener.logo}" alt="${partener.name}">`;
  slider.appendChild(div);
});

slider.innerHTML += slider.innerHTML;
slider.innerHTML += slider.innerHTML;
slider.innerHTML += slider.innerHTML;
slider.innerHTML += slider.innerHTML;


// Efect scroll pentru navbar
const nav = document.querySelector("header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });


// Scroll controlat pentru formular
document.querySelector('a[href="#form-anchor"]').addEventListener('click', function(e) {
  e.preventDefault();

  const target = document.querySelector('#form-anchor');
  if (!target) return;

  const offset = -100;
  const topPosition = target.getBoundingClientRect().top + window.scrollY + offset;

  window.scrollTo({
    top: topPosition,
    behavior: 'smooth'
  });
});

// Scroll controlat pentru echipa
document.querySelector('a[href="#echipa-anchor"]').addEventListener('click', function(e) {
  e.preventDefault();

  const target = document.querySelector('#echipa-anchor');
  if (!target) return;

  const offset = -100;
  const topPosition = target.getBoundingClientRect().top + window.scrollY + offset;

  window.scrollTo({
    top: topPosition,
    behavior: 'smooth'
  });
});


// top up on refresh
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};


// Adăugare membri echipei
const membri = [
    { logo: "assets/HR.webp", name: "Miriam Alexia Beloiu", departament1: "HR", departament2: "FR"},
    { logo: "assets/HR.webp", name: "Marius Teodorescu", departament1: "HR", departament2: "IT-front-end"},
    { logo: "assets/HR.webp", name: "Karina Istrate", departament1: "HR", departament2: "EDU"},
    { logo: "assets/FR.webp", name: "Maria Cristiana Boțogan", departament1: "FR", departament2: "HR"},
    { logo: "assets/FR.webp", name: "Nizovtsova Sofiia", departament1: "FR", departament2: "HR"},
    { logo: "assets/I&P.webp", name: "Cristian Condoiu", departament1: "I&P", departament2: "IT-back-end"},
    { logo: "assets/I&P.webp", name: "Maria Georgia Smeriacov", departament1: "I&P", departament2: "HR"},
    { logo: "assets/IT.webp", name: "Gabriel Sebastian Mihai", departament1: "IT-front-end", departament2: "EDU"},
    { logo: "assets/HR.webp", name: "Matei Ciobotarica", departament1: "HR", departament2: "I&P"},
    { logo: "assets/EDU.webp", name: "Daria-Ștefania Toma", departament1: "EDU", departament2: "HR"},
    { logo: "assets/FR.webp", name: "Delia-Adelina Marinca", departament1: "FR", departament2: "IT-back-end"},
    { logo: "assets/IT.webp", name: "Iustin Albu", departament1: "IT-back-end", departament2: "I&P"},
    { logo: "assets/FR.webp", name: "Aab Sihabul Millah", departament1: "FR", departament2: "I&P"},
    { logo: "assets/HR.webp", name: "Ioan Cristian Duroi", departament1: "HR", departament2: "IT-back-end"},
  ];

const container = document.getElementById('membri');

membri.forEach(membru => {
  const div = document.createElement("div");
  div.classList.add("membru");
  div.innerHTML = `
    <img src='${membru.logo}' alt="logo">
    <div class="info-membru">
      <h4>${membru.name}</h4> 
      <h5>${membru.departament1}</h5> 
      <h5>${membru.departament2}</h5>
    <div>
    `;
  container.appendChild(div);
});