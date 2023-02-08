//! DOM
//! FIRST
let p = 0;
let text = document.querySelector(".text");
let minus = document.querySelector(".minus");
let plus = document.querySelector(".plus");
let b = document.createElement("b");

text.innerHTML = p;

function incrementCount() {
  p += 10;
  text.innerHTML = p;
  b.innerHTML = "Вы прибавали число!";
  alert(b.innerHTML);
}
function decrementCount() {
  p -= 10;
  text.innerHTML = p;
  b.innerHTML = "Вы отняли число!";
  alert(b.innerHTML);
}
plus.addEventListener("click", () => {
  incrementCount();
  document.body.style.backgroundColor = "skyblue";
  plus.style.backgroundColor = "yellow";
  plus.style.color = "red";
  text.style.color = "black";
  b.style.color = "black";
  b.style.fontSize = "50px";
});
minus.addEventListener("click", () => {
  decrementCount();
  document.body.style.backgroundColor = "gray";
  minus.style.backgroundColor = "red";
  minus.style.color = "white";
  text.style.color = "yellow";
});
/* let div = document.createElement("div"); */

//! SECOND
//  console.log(div);
// //? Метод querySelector - для получения тегов из html с помощью document
// p.innerHTML = "Hello!"; //! Для добавление текста в тег
// p.style.color = "white";
// p.style.fontSize = "48px";
// p.style.textAlign = "center";
// div.append(p);
// div.style.backgroundColor = "blue";
// div.style.borderRadius = "50px";
// div.style.width = "500px";
// div.style.margin = "0px, auto";
// div.style.display = "block";
// console.log(p);

// document.body.append(div);

//! THIRD
// (function () {
//   let p = 0;
//   let text = document.querySelector(".text");
//   let minus = document.querySelector(".minus");
//   let plus = document.querySelector(".plus");
//   let b = document.createElement("b");

//   if (!text || !minus || !plus) {
//     console.error(
//       "Error: One or more of the required elements could not be found on the page."
//     );
//     return;
//   }

//   text.innerHTML = p;

//   function incrementCount() {
//     p += 100000;
//     text.innerHTML = p;
//   }
//   function decrementCount() {
//     p -= 100000;
//     text.innerHTML = p;
//   }
//   plus.addEventListener("click", () => {
//     incrementCount();
//     document.body.style.backgroundColor = "skyblue";
//     plus.style.backgroundColor = "yellow";
//     plus.style.color = "red";
//     text.style.color = "black";
//     b.innerHTML = "Hello!";
//   });
//   minus.addEventListener("click", () => {
//     decrementCount();
//     document.body.style.backgroundColor = "gray";
//     minus.style.backgroundColor = "red";
//     minus.style.color = "white";
//     text.style.color = "yellow";
//   });
// })();

//! FOURTH
// (function () {
//   let p = 0;
//   let text = document.querySelector(".text");
//   let minus = document.querySelector(".minus");
//   let plus = document.querySelector(".plus");
//   let b = document.createElement("b");

//   if (!text || !minus || !plus) {
//     console.error(
//       "Error: One or more of the required elements could not be found on the page."
//     );
//     return;
//   }

//   text.innerHTML = p;

//   function incrementCount() {
//     p += 1;
//     text.innerHTML = p;
//     b.innerHTML = "You added a number.";
//   }
//   function decrementCount() {
//     p -= 1;
//     text.innerHTML = p;
//     b.innerHTML = "You took away a number.";
//   }
//   plus.addEventListener("click", () => {
//     incrementCount();
//     document.body.style.backgroundColor = "skyblue";
//     plus.style.backgroundColor = "yellow";
//     plus.style.color = "red";
//     text.style.color = "black";
//   });
//   minus.addEventListener("click", () => {
//     decrementCount();
//     document.body.style.backgroundColor = "gray";
//     minus.style.backgroundColor = "red";
//     minus.style.color = "white";
//     text.style.color = "yellow";
//   });

//   text.appendChild(b);
// })();
