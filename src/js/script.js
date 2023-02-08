//! DOM
let p = 0;
let text = document.querySelector(".text");
let minus = document.querySelector(".minus");
let plus = document.querySelector(".plus");
let b = document.createElement("b");

text.innerHTML = p;

function incrementCount() {
  p += 100000;
  text.innerHTML = p;
}
function decrementCount() {
  p -= 100000;
  text.innerHTML = p;
}
plus.addEventListener("click", () => {
  incrementCount();
  document.body.style.backgroundColor = "skyblue";
  plus.style.backgroundColor = "yellow";
  plus.style.color = "red";
  text.style.color = "black";
});
minus.addEventListener("click", () => {
  decrementCount();
  document.body.style.backgroundColor = "gray";
  minus.style.backgroundColor = "red";
  minus.style.color = "white";
  text.style.color = "yellow";
});
/* let div = document.createElement("div"); */

/* console.log(div);
//? Метод querySelector - для получения тегов из html с помощью document
p.innerHTML = "Hello!"; //! Для добавление текста в тег
p.style.color = "white";
p.style.fontSize = "48px";
p.style.textAlign = "center";
div.append(p);
div.style.backgroundColor = "blue";
div.style.borderRadius = "50px";
div.style.width = "500px";
div.style.margin = "0px, auto";
div.style.display = "block";
console.log(p);

document.body.append(div); */
