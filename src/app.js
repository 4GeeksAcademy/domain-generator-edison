import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.getElementById("myDomain").innerHTML = ramdonDomain();
};

let ramdonDomain = () => {
  let pronoun = ["the", "our", "his", "your"];
  let adj = ["great", "big", "small", "dark"];
  let noun = ["jogger", "racoon", "three", "car"];
  let extension = [".com", ".net", ".es", ".io"];

  return (
    pronoun[Math.floor(Math.random() * pronoun.length)] +
    adj[Math.floor(Math.random() * adj.length)] +
    noun[Math.floor(Math.random() * noun.length)] +
    extension[Math.floor(Math.random() * extension.length)]
  );
};
