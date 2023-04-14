const loadContactTab = () => {
  const content = document.getElementById("content");

  const contactTab = document.createElement("div");
  contactTab.classList.add("main");

  const phone = document.createElement("p");
  phone.textContent = "📞 123 456 789";

  const address = document.createElement("p");
  address.textContent = "🏠 Hollywood Boulevard 42, Los Angeles, USA";

  const map = new Image();
  map.classList.add("map");
  map.alt = "location image";
  map.src =
    "https://michalosman.github.io/restaurant-page/images/restaurant-location.png";

  contactTab.append(phone, address, map);
  content.appendChild(contactTab);
};

export default loadContactTab;
