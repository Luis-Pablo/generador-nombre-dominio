/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

/*
window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
*/
const pro = ["el", "la", "ellos", "mi"];
const adj = ["bonito", "genial", "sencillo"];
const dominios = [".com", ".es", ".net", "cl", "ar"];

let escribir = click => {};

const input = document.querySelector("input");
const boton = document.querySelector("#boton");
const generar = document.querySelector("#nombres-generados");
const p = document.createElement("p");
const ingreso = document.querySelector("#input");

input.addEventListener("input", updateValue);

function updateValue(e) {
  boton.textContent = e.srcElement.value; //modificar
}

let frase = e => {
  let random =
    pro[Math.floor(Math.random() * pro.length)] +
    adj[Math.floor(Math.random() * adj.length)] +
    e;
  dominios[Math.floor(Math.random() * dominios.length)];
  return random;
};
console.log(frase());
let parrafo = () => {};

boton.addEventListener("click", () => {
  frase(updateValue());
});
