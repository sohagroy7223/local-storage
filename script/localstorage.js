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
  // convert object to string by the json**********
  const converted = JSON.stringify(person);
  // console.log(typeof converted);

  // back string to object by the json**********
  // const backToObject = JSON.parse(converted);
  // console.log(backToObject.name);

  localStorage.setItem("akash", converted);
  console.log(localStorage.getItem("akash"));
};
const data = localStorage.getItem("akash");
// console.log(data);
const convertData = JSON.parse(data);
console.log(convertData.friends);
