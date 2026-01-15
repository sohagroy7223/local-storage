// const age = 10;

// localStorage.setItem("name", "sohag");
// localStorage.setItem("myAge", age);
// localStorage.setItem("dream", "a freelancer");
// console.log(localStorage.getItem("name"));
// console.log(localStorage.removeItem("name"));
// localStorage.setItem("lion", "20");

// localStorage.getItem("lion");

// permeative data in local storage********

// const handleAddToStorage = () => {
//   localStorage.setItem("name", " sohag");
//   localStorage.setItem("age", 20);
//   console.log(localStorage.getItem("name"));
//   localStorage.removeItem("age");
// };

// non-permeative data in local storage*******

const ObjectToLocalStorage = () => {
  const person = {
    name: "akash",
    age: 20,
    friends: ["sumon", "kongkon", "ripon"],
  };
  //   console.log(person.toString());
  const converted = JSON.stringify(person);
  console.log(converted);
  localStorage.setItem("akash", converted);
};
