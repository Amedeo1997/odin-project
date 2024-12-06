const container = document.getElementById("container");

const newParagraph = document.createElement("p");

newParagraph.textContent = "Hey I'm red!";

newParagraph.style.color = "red";

container.appendChild(newParagraph)