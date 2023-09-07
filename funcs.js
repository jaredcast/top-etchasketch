const grid = document.querySelector('.grid');
const sizeBtn = document.querySelector('.sizeBtn');

//Get the size from input and create a new grid for it
sizeBtn.addEventListener('click', () => {
    //const sizeInput = document.querySelector('#size').value
    let sizeInput = document.getElementById('size').value;
    createGrid(sizeInput, sizeInput);
    sizeInput = "";
})

let createGrid = (r, c) => {
    if (r <= 0 || c <= 0) {
        alert("ERROR! Can't have a number <= 0.")
        return;
    }
    grid.innerHTML = "";
    for (let i = 0; i < r; i++) {
        const row = document.createElement('div');
        row.className = 'row';
        grid.appendChild(row);
        for (let j = 0; j < c; j++) {
            const square = document.createElement('div');
            square.className = 'square';
            square.addEventListener('mouseover', (event) =>{
                event.target.style.backgroundColor = "black";
            })
            row.appendChild(square);
        }
    }
    sizeBtn.reset();
}

createGrid(5,5);
