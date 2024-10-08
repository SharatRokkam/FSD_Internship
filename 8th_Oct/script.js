// var age = 25;
// let student = "John";
// const isStudent = true;

// console.log(age);
// console.log(isStudent);
// console.log(student);
// ctrl + /

// const studentName = ["Apoorva", 1, true, {}, []]

// const obj1 = {
//   id: 1,
//   studentName: "John",
//   age: 22,
// };

// let a = 10;
// let b = 5;

// // Arithmetic
// let sum = a + b; // 15

// let difference = a - b; // 5

// // Comparison
// let isEqual = a == b; // false
// let isGreater = a > b; // true

// console.log(sum, difference, isEqual, isGreater);

// function addNumbers(x, y) {
//   return x + y;
// }

// console.log(addNumbers(3, 7)); // 10
// console.log(addNumbers(4, 8)); // 10
// console.log(addNumbers(7, 3)); // 10
// console.log(addNumbers(8, 7)); // 10
// console.log(addNumbers(10, 7)); // 10

// DOM - Document Object Model

// const newDiv = document.createElement("div");
// newDiv.textContent = "I am a new div!";

// // adopting
// document.body.appendChild(newDiv);

// let count = 0;

// document.getElementById("ClickBtn").addEventListener("click", function () {
//   // count = count + 1;
//   count++;
//   document.getElementById("count").innerText = count;
// });

// conditional statement

let isWhite = true;

let button = document.querySelector("#btn");

button.addEventListener("click", function () {
  if (isWhite) {
    document.body.style.backgroundColor = "black";
    button.textContent = "Change to White";
  } else {
    document.body.style.backgroundColor = "white";
    button.textContent = "Change to Black";
  }

  isWhite = !isWhite;
});
