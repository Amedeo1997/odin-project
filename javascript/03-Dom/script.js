const container = document.getElementById("container");

const newParagraph = document.createElement("p");

newParagraph.textContent = "Hey I'm red!";

newParagraph.style.color = "red";

// Add h3 with blue text  that says hey I'm blue

const newHash = document.createElement('h3');

newHash.style.color = "blue";

newHash.textContent = "Hey I'm blue";

container.appendChild(newParagraph)

container.appendChild(newHash);

