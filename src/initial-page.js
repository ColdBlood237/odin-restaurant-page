import loadHomeTab from "./home";
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
  homeTab.style.textDecoration = "underline";
  homeTab.classList.add("tab-link", "home-link");
  const menuTab = document.createElement("a");
  menuTab.textContent = "Menu";
  menuTab.classList.add("tab-link", "menu-link");
  const contactTab = document.createElement("a");
  contactTab.textContent = "Contact";
  contactTab.classList.add("tab-link", "contact-link");
  tabsContainer.append(homeTab, menuTab, contactTab);

  header.appendChild(tabsContainer);

  content.appendChild(header);

  loadHomeTab();
};

export default loadInitialPage;
