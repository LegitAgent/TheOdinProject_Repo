const container = document.querySelector("#container");

const contentP = document.createElement('p');
contentP.style.color = "red";
contentP.textContent = "Hey!, I am red!";

const blueh3 = document.createElement('h3');
blueh3.style.color = "blue";
blueh3.textContent = "I'm a blue h3!";

const parentdiv = document.createElement('div');
parentdiv.style.borderStyle = 'solid';
parentdiv.style.borderWidth = '2px';
parentdiv.style.backgroundColor = 'pink';

const h1indiv = document.createElement('h1');
h1indiv.textContent = "I'm in a div.";

const pindiv = document.createElement('p');
pindiv.textContent = "ME TOO!";

container.append(contentP);
container.append(blueh3);
container.append(parentdiv);

parentdiv.append(h1indiv);
parentdiv.append(pindiv);

// button stuff
function alertFunction() {
  alert("YAY! YOU DID IT!");
}
const btn = document.querySelector("#btn");

// METHOD 3
btn.addEventListener("click", (e) => {
  e.target.style.color = "blue";
});

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click",() => {
        alert(button.id);
    });
});