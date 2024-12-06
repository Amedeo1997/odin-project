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

// add a new div with black border and pink background color with an h1 and p inside

const newDiv = document.createElement("div");

newDiv.style.backgroundColor = 'pink';
newDiv.style.borderColor = 'black';
newDiv.classList.add('jsDiv');

const divHash = document.createElement('h1');
divHash.textContent = "I'm inside a new div";
const divP = document.createElement('p');
divP.textContent = "Me too!!";
container.appendChild(newDiv)

newDiv.appendChild(divHash);
newDiv.appendChild(divP);