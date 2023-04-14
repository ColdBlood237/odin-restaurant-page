import chefImageSrc from "./chef.jpg";

const loadHomeTab = () => {
  const content = document.getElementById("content");
  const main = document.createElement("div");
  main.classList.add("main");

  const firstP = document.createElement("p");
  firstP.textContent = "Best pizza in Italy";
  const secondP = document.createElement("p");
  secondP.textContent = "Made with passione since 1908";
  const chefImg = document.createElement("img");
  chefImg.classList.add("main-img");
  chefImg.alt = "cool chef image";
  chefImg.src = chefImageSrc;
  const thirdP = document.createElement("p");
  thirdP.textContent = "Order online or visit us!";
  main.append(firstP, secondP, chefImg, thirdP);

  content.appendChild(main);
};

export default loadHomeTab;
