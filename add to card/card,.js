const handelAddToCard = () => {
  const productName = document.getElementById("productName").value;
  const productQuantity = document.getElementById("productQuantity").value;
  displayProduct(productName, productQuantity);
};

const displayProduct = (name, quantity) => {
  const container = document.getElementById("card-container");
  const li = document.createElement("li");
  li.innerText = `${name}:${quantity}`;
  container.append(li);
};
