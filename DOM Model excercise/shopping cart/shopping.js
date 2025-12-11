const uls = document.querySelector("ul");
const inputs = document.querySelector("input");
const button = document.querySelector("button");

function addItem(e) {
    // Since the input is wrapped in a form element, pressing the Enter key will trigger the form to submit. 
    // The call to preventDefault() will prevent the form from refreshing the page so a new item can be added to the list instead.
    e.preventDefault();
    const itemAdd = inputs.value;
    inputs.value = "";

    const list = document.createElement("li");
    const span = document.createElement("span");
    const button2 = document.createElement("button");

    list.appendChild(span);
    list.appendChild(button2);

    span.textContent = itemAdd;
    button2.textContent = "Delete";

    button2.addEventListener("click", () => {
        list.remove();
    });

    uls.appendChild(list);
}
// tesing commit
button.addEventListener("click", addItem);
