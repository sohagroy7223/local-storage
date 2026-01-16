const handleCardBtn = () => {
  const productName = document.getElementById("productName").value;
  const productQuantity = document.getElementById("productQuantity").value;
  displayCardValue(productName, productQuantity);
};

const displayCardValue = (name, quantity) => {
  const cardContainer = document.getElementById("card-container");
  const li = document.createElement("li");
  li.innerText = `${name}: ${quantity}`;

  cardContainer.append(li);
};
