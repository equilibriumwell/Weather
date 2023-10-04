const clothingData = {
  shirts: ["T-Shirt", "Button-Up Shirt", "Sweater"],
  pants: ["Jeans", "Chinos", "Shorts"],
  // Add more categories and items as needed
};

function loadCategory(category) {
  const clothingItemsContainer = document.getElementById("clothing-items");
  const items = clothingData[category] || [];

  // Clear previous items
  clothingItemsContainer.innerHTML = "";

  // Display items
  items.forEach(item => {
      const itemElement = document.createElement("div");
      itemElement.classList.add("item");
      itemElement.textContent = item;
      itemElement.onclick = () => selectItem(category, item);
      clothingItemsContainer.appendChild(itemElement);
  });
}

function selectItem(category, item) {
  const selectedItemsContainer = document.getElementById("selected-items");
  const selectedItem = document.createElement("div");
  selectedItem.textContent = `${category}: ${item}`;
  selectedItemsContainer.appendChild(selectedItem);
}
