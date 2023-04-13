import chefImageSrc from "./chef.jpg";
import "./style.css";

const loadInitialPage = () => {
  const content = document.getElementById("content");

  const header = document.createElement("div");
  header.classList.add("header");

  const title = document.createElement("h1");
  title.textContent = "Mamma Mia";
  header.appendChild(title);

  const tabsContainer = document.createElement("div");

  const homeTab = document.createElement("a");
  homeTab.textContent = "Home";
  homeTab.classList.add("tab-link");
  const menuTab = document.createElement("a");
  menuTab.textContent = "Menu";
  menuTab.classList.add("tab-link");
  const contactTab = document.createElement("a");
  contactTab.textContent = "Contact";
  contactTab.classList.add("tab-link");
  tabsContainer.append(homeTab, menuTab, contactTab);

  header.appendChild(tabsContainer);

  content.appendChild(header);

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

export default loadInitialPage;
