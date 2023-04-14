import loadInitialPage from "./initial-page";
import loadHomeTab from "./home";
import loadMenuTab from "./menu";
import loadContactTab from "./contact";

loadInitialPage();

const homeTab = document.querySelector(".home-link");
const menuTab = document.querySelector(".menu-link");
const contactTab = document.querySelector(".contact-link");

function cleanPage() {
  const mainContent = document.querySelector(".main");
  mainContent.remove();
}

homeTab.addEventListener("click", () => {
  cleanPage();
  homeTab.style.textDecoration = "underline";
  menuTab.style.textDecoration = "none";
  contactTab.style.textDecoration = "none";
  loadHomeTab();
});

menuTab.addEventListener("click", () => {
  cleanPage();
  homeTab.style.textDecoration = "none";
  menuTab.style.textDecoration = "underline";
  contactTab.style.textDecoration = "none";
  loadMenuTab();
});

contactTab.addEventListener("click", () => {
  cleanPage();
  homeTab.style.textDecoration = "none";
  menuTab.style.textDecoration = "none";
  contactTab.style.textDecoration = "underline";
  loadContactTab();
});
