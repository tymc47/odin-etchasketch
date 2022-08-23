function createGrid(size){
    const panel = document.querySelector('.panel');

    // clear grid
    panel.replaceChildren();

    // generate new grid
    for (let i = 0; i < size**2; i++){
        const gridbox = document.createElement('div');
        gridbox.classList.add("gridbox");
        gridbox.style.height = (768/size - 2) +"px";
        gridbox.style.width = (768/size - 2) +"px";

        gridbox.addEventListener('mouseover', function(){
            if (isMouseDown){
            this.style.background = 'black';
            }
        })

        gridbox.addEventListener('mousedown', function(){
            this.style.background = 'black';
        })

        panel.appendChild(gridbox);
    }
}

createGrid(16);
const slider = document.querySelector('.slider');
const slidervalue = document.querySelector('.slidervalue');
let isMouseDown = false;

slidervalue.textContent = (slider.value + " x " + slider.value);

document.body,onmousedown = () => isMouseDown = true;
document.body.onmouseup = () => isMouseDown = false;

slider.oninput = function(){
    createGrid(this.value);
    slidervalue.textContent = (slider.value + " x " + slider.value);
}

