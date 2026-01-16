const handleCardBtn = () => {
  const productName = document.getElementById("productName").value;
  const productQuantity = document.getElementById("productQuantity").value;
  displayCartValue(productName, productQuantity);
};

const displayCartValue = (name, quantity) => {
  productName.value = "";
  productQuantity.value = "";
  saveProductToLocalStorage(name, quantity);
  const cartContainer = document.getElementById("cart-container");
  const li = document.createElement("li");
  li.innerText = `${name}: ${quantity}`;

  cartContainer.append(li);
};

const getProductsFromLocalStorage = () => {
  let cart = {};
  const getProduct = localStorage.getItem("cart");
  if (getProduct) {
    cart = JSON.parse(getProduct);
  }
  return cart;
};

const displayProductFromLocalStorage = () => {
  const products = getProductsFromLocalStorage();
  for (const product in products) {
    displayCartValue(product, products[product]);
  }
};

const saveProductToLocalStorage = (name, quantity) => {
  const cart = getProductsFromLocalStorage();

  cart[name] = quantity;

  const cartString = JSON.stringify(cart);

  localStorage.setItem("cart", cartString);
};

displayProductFromLocalStorage();
