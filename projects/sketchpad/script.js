const container = document.getElementById('container');
const resizeBtn = document.getElementById('resize-btn');

function createGrid(size) {
    container.innerHTML = ''; // Clear existing grid
    const squareSize = 960 / size; // Calculate size for each square
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.addEventListener('mouseover', changeColor);
        container.appendChild(square);
    }
}

function changeColor(e) {
    const square = e.target;
    const currentOpacity = parseFloat(square.style.opacity) || 0;
    const randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    square.style.backgroundColor = randomColor;
    square.style.opacity = Math.min(currentOpacity + 0.1, 1); // Darken progressively
}

resizeBtn.addEventListener('click', () => {
    let newSize = parseInt(prompt('Enter new grid size (1-100):'));
    if (newSize < 1 || newSize > 100 || isNaN(newSize)) {
        alert('Please enter a number between 1 and 100.');
    } else {
        createGrid(newSize);
    }
});

// Initialize the grid with default size
createGrid(16);
