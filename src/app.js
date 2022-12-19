/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["the dog", "my granma", "his turtle", "my bird"];
let what = ["eat", "pissed", "crushed", "broked"];
let when = [
  "before the class",
  "right in time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

window.onload = function() {
  let quien = parseInt(Math.random() * (who.length + 1 - 1) + 1);
  let que = parseInt(Math.random() * (what.length + 1 - 1) + 1);
  let cuando = parseInt(Math.random() * (when.length + 1 - 1) + 1);

  let concat = who[quien - 1] + " " + what[que - 1] + " " + when[cuando - 1];

  return concat;
};

document.getElementById("excuse").innerText = onload();
