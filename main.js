// MENU（menu.js）からお品書きを描く
function renderMenu() {
  const list = document.getElementById("menu");
  for (const item of MENU) {
    const li = document.createElement("li");
    li.className = "menu-item";

    const name = document.createElement("span");
    name.className = "menu-name";
    name.textContent = item.name;

    const price = document.createElement("span");
    price.className = "menu-price";
    price.textContent = `${item.price}円`;

    li.append(name, price);
    list.append(li);
  }
}

renderMenu();
