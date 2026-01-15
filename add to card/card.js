const handelAddToCard = () => {
  const productName = document.getElementById("productName").value;
  const productQuantity = document.getElementById("productQuantity").value;
  displayProduct(productName, productQuantity);
};

const displayProduct = (name, quantity) => {
  productName.value = "";
  productQuantity.value = "";
  handleSetLocalStorage(name, quantity);
  const container = document.getElementById("card-container");
  const li = document.createElement("li");
  li.innerText = `${name}:${quantity}`;
  container.append(li);
};

const handleSetLocalStorage = (productName, quantity) => {
  // localStorage.setItem(productName, quantity);
  //////////////////////////
  const newProduct = { name: "jack", quantity: 10 };
  localStorage.setItem("jack", JSON.stringify(newProduct));
};
