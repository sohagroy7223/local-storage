const handelAddToCard = () => {
  const productName = document.getElementById("productName").value;
  const productQuantity = document.getElementById("productQuantity").value;
  displayProduct(productName, productQuantity);
};

const displayProduct = (name, quantity) => {
  productName.value = "";
  productQuantity.value = "";
  saveProductToLocalStorage(name, quantity);
  const container = document.getElementById("card-container");
  const li = document.createElement("li");
  li.innerText = `${name}:${quantity}`;
  container.append(li);
};

const getProductFromLocalStorage = () => {
  let card = {};
  const getProduct = localStorage.getItem("card");
  if (getProduct) {
    card = JSON.parse(getProduct);
  }
  return card;
};

const displayProductsFromLocalStor = () => {
  const products = getProductFromLocalStorage();
  for (const product in products) {
    displayProduct(product, products[product]);
  }
};

const saveProductToLocalStorage = (productName, quantity) => {
  const card = getProductFromLocalStorage();
  card[productName] = quantity;
  const cardString = JSON.stringify(card);
  localStorage.setItem("card", cardString);
};

displayProductsFromLocalStor();
