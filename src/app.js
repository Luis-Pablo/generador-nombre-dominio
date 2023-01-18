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
const ingreso = document.querySelector('[name="ingreso"]');
const input = document.querySelector("#input");

let datosUsuario = {
  ingreso: ""
};

input.addEventListener("change", () => {
  datosUsuario[ingreso.name] = ingreso.value;
  console.log(datosUsuario);
});
