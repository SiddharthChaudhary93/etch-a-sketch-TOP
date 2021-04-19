const grid = document.querySelector('.grid');
const slider = document.querySelector('.slider');

var gridRow = 16;
var gridColumn = gridRow;


// console.log(grid);


window.addEventListener('load',createGrid(gridRow,gridColumn));


function createGrid(gridRow,gridColumn){
    for(let i=0;i<gridRow;i++){
        for(let j=0;j<gridColumn;j++){
            const div = document.createElement('div');
            div.classList.add('grid-element');
            div.addEventListener('mouseenter',changeColor);
            grid.appendChild(div);
        }
    }
    
}

function changeColor(){
    // console.log(this);
    const randomR = Math.round(Math.random() * (256));
    const randomG = Math.round(Math.random() * (256));
    const randomB = Math.round(Math.random() * (256));
    this.style.backgroundColor=`rgb(${randomR},${randomG},${randomB})`;
}

function changeGridSize(){
    // console.log(this.value);
    gridRow = this.value;
    gridColumn = gridRow;
    clearGrid();
    document.documentElement.style.setProperty('--gridRow',`${gridRow}`);
    document.documentElement.style.setProperty('--gridColumn',`${gridColumn}`);
    createGrid(gridRow,gridColumn);
    
}


function clearGrid(){
    const divs = document.querySelectorAll('.grid-element');
    divs.forEach(div=>{
        grid.removeChild(div);
    })
}



slider.addEventListener('change',changeGridSize);
slider.addEventListener('mousemove',changeGridSize);


