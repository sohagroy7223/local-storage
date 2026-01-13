// const age = 10;

// localStorage.setItem("name", "sohag");
// localStorage.setItem("myAge", age);
// localStorage.setItem("dream", "a freelancer");
// console.log(localStorage.getItem("name"));
// console.log(localStorage.removeItem("name"));

const handleAddToStorage = () => {
  localStorage.setItem("name", " sohag");
  localStorage.setItem("age", 20);
  console.log(localStorage.getItem("name"));
  localStorage.removeItem("age");
};
