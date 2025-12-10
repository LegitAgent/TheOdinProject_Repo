const container_section = document.querySelector("#container");

const link = document.querySelector("a");

// Manipulation
link.textContent = "Mozilla Developer Network";
link.href = "https://developer.mozilla.org";

container_section.appendChild(link);

const para = document.createElement("p");
para.textContent = "We hope you enjoyed the ride.";

container_section.appendChild(para)

// Text Node
const text = document.createTextNode(
  " — the premier source for web development knowledge.",
);

// const linkPara = document.querySelector("p");
// linkPara.appendChild(text);

// container_section.append(linkPara)
// linkPara.remove();

// styles
para.style.color = "white";
para.style.backgroundColor = "black";
para.style.padding = "10px";
para.style.width = "250px";
para.style.textAlign = "center";

para.classList.add("highlight");