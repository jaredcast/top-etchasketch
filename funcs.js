const grid = document.querySelector('.grid');
const sizeBtn = document.querySelector('.sizeBtn');
const reset = document.querySelector('.reset');
const sizeDim = document.querySelector('.sizeDim');
//Change size button - Get the size from input and create a new grid for it
sizeBtn.addEventListener('click', () => {
    let sizeInput = document.querySelector('#size').value
    console.log(sizeInput);
    createGrid(document.querySelector('#size').value);
    //doesnt work
    //sizeInput = "";
    //works
    sizeDim.innerHTML = `Size of Grid (${sizeInput} x ${sizeInput})`;
    document.querySelector('#size').value = "";
})

//Reset Button - Removes the color styling upon reset.
reset.addEventListener('click', () => {
    const allBoxes = document.querySelectorAll(".box");
    allBoxes.forEach((box) => {
        //console.log(box);
        box.style.backgroundColor = "";
    })
})

let createGrid = (size) => {
    if (size <= 0) {
        alert("ERROR! Can't have a number <= 0.")
        return;
    }
    if (size > 100) {
        alert("ERROR! Can't have a number > 100 .")
        return;
    }
    
    grid.innerHTML = "";
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    //Add a ton of squares
    for (let i = 0; i < size*size; i++) {
        const square = document.createElement('div');
        square.className = 'box';
        square.addEventListener('mouseover', (event) =>{
            event.target.style.backgroundColor = "black";
        })
        grid.appendChild(square);
    }
    

    //Old method - you can ignore this
    // for (let i = 0; i < r; i++) {
    //     const row = document.createElement('div');
    //     row.className = 'row';
    //     grid.appendChild(row);
    //     for (let j = 0; j < c; j++) {
    //         const square = document.createElement('div');
    //         square.className = 'square';
    //         square.addEventListener('mouseover', (event) =>{
    //             event.target.style.backgroundColor = "black";
    //         })
    //         row.appendChild(square);
    //     }
    // }
    // sizeBtn.reset();
}

createGrid(16);