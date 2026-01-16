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
  const cart = {};
  const getProduct = localStorage.getItem("cart");
  if (getProduct) {
    cart = JSON.stringify(getProduct);
  }
  return cart;
};

const saveProductToLocalStorage = (name, quantity) => {
  const cart = getProductsFromLocalStorage();
  console.log(cart);
};
