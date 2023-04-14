const loadMenuTab = () => {
  const content = document.getElementById("content");

  const menuTab = document.createElement("div");
  menuTab.classList.add("main");

  const salsiccia = document.createElement("div");
  salsiccia.classList.add("plate");
  const salsicciaImg = new Image();
  salsicciaImg.alt = "pizza salsiccia picture";
  salsicciaImg.src =
    "https://michalosman.github.io/restaurant-page/images/pizzas/salsiccia.png";
  const salsicciaTitle = document.createElement("h3");
  salsicciaTitle.textContent = "Salsiccia";
  const salsicciaDescription = document.createElement("p");
  salsicciaDescription.textContent =
    "Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil";
  salsiccia.append(salsicciaImg, salsicciaTitle, salsicciaDescription);

  menuTab.appendChild(salsiccia);
  content.appendChild(menuTab);
};

export default loadMenuTab;
