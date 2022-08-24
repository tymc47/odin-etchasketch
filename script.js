function createGrid(size){
    const panel = document.querySelector('.panel');

    // clear grid
    panel.replaceChildren();

    // generate new grid
    for (let i = 0; i < size**2; i++){
        const gridbox = document.createElement('div');
        gridbox.classList.add("gridbox");

        gridbox.addEventListener('mouseover', function(){
            if (isMouseDown){
            this.style.background = penColor;
            }
        })

        gridbox.addEventListener('mousedown', function(){
            this.style.background = penColor;
        })

        panel.appendChild(gridbox);
    }

    panel.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    panel.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    slidervalue.textContent = (slider.value + " x " + slider.value);
}

function clearDrawing() {
    const gridboxes = document.querySelectorAll('.gridbox');
    
    gridboxes.forEach(gridbox => {
        gridbox.style.background = 'white';
    })
}

function changePenColor(){
    penColor = this.value;
}

const defaultSize = 16;
const defaultColor = 'black';

const slider = document.querySelector('.slider');
const slidervalue = document.querySelector('.slidervalue');
const buttonClear = document.querySelector('.clear');
const buttonEraser = document.querySelector('.eraser');
const buttonPen = document.querySelector('.pen');
const palette = document.querySelector('.palette');

let penColor = defaultColor;
let isMouseDown = false;

document.body,onmousedown = () => isMouseDown = true;
document.body.onmouseup = () => isMouseDown = false;
slidervalue.textContent = (defaultSize + " x " + defaultSize);
buttonClear.addEventListener('click', clearDrawing);
buttonEraser.addEventListener('click', changePenColor);
buttonPen.addEventListener('click', function(){penColor = palette.value});
slider.oninput = function(){createGrid(this.value)};
palette.oninput = changePenColor;

createGrid(16);

