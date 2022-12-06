/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let domainNames = [];
  let ourlist = document.querySelector(".domains");
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        domainNames.push(pronoun[i] + adj[j] + noun[k] + ".com");
      }
    }
  }
  for (let i = 0; i < domainNames.length; i++) {
    ourlist.innerHTML += "<li>" + domainNames[i] + "</li>";
  }
};
