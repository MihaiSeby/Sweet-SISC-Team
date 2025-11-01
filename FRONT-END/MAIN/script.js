const parteneri = [
    { name: "VitaminAqua", logo: "assets/logo-vitamin-aqua.png" },
    { name: "CreamDream", logo: "assets/logo-cream-dream.img" },
    { name: "PizzaHut", logo: "assets/logo-pizza-hut.png" },
    { name: "Alka", logo: "assets/logo-alka.png" },
  ];

const slider = document.getElementById("parteneri-slider");

// adaugăm partenerii
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