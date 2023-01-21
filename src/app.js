/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const pro = ["el", "la", "ellos", "mi"];
const adj = ["bonito", "genial", "sencillo"];
const dominios = [".com", ".es", ".net", "cl", "ar"];
const ingreso = document.querySelector('[name="ingreso"]');
const input = document.querySelector("#input");
const div = document.querySelector("#nombres-generados");
const boton = document.querySelector("#boton");
let datosUsuario = {
  ingreso: ""
};

input.addEventListener("change", () => {
  datosUsuario[ingreso.name] = ingreso.value;
});

const frase = datoUsuario => {
  let random =
    pro[Math.floor(Math.random() * pro.length)] +
    adj[Math.floor(Math.random() * adj.length)] +
    datoUsuario +
    dominios[Math.floor(Math.random() * dominios.length)];
  return random;
};

let p = document.createElement("p");
let parrafo = texto => {
  p.classList.add("fw-bolder");
  p.classList.add("my-4");
  p.textContent = texto;
  return div.appendChild(p);
};

boton.addEventListener("click", () => {
  return parrafo(frase(datosUsuario.ingreso));
});
