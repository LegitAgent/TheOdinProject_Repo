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
// Method 1
function alertFunction() {
  alert("YAY! YOU DID IT!");
}
// <button onclick="alertFunction()">CLICK ME BABY</button>
// on the html file ^^

const btn = document.querySelector("#btn");

// METHOD 3
btn.addEventListener("click", (e) => {
  e.target.style.color = "blue";
  alertFunction();
});

const buttons = document.querySelectorAll("#container button");

buttons.forEach(button => {
    button.addEventListener("click",() => {
        alert(button.id);
    });
});

const menu = document.querySelector("#menu");

menu.addEventListener('click', (e) => {
    let target = e.target;
    switch(target.id) {
        case 'cool1':
            console.log("cool 1");
            break;
        case 'cool2':
            console.log("cool 2");
            break;
        case 'cool3':
            console.log("cool 3");
            break;
        case 'ul':
            console.log("ul");
            break;
    }
});
