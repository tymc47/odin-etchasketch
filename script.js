function createGrid(){
    const panel = document.querySelector('.panel');

    for (let i = 0; i < 256; i++){
        const gridbox = document.createElement('div');
        gridbox.classList.add("gridbox");
        gridbox.setAttribute("unselectable", "on");
        panel.appendChild(gridbox);
    }
}


createGrid()
const gridboxes = document.querySelectorAll('.gridbox');
const panel = document.querySelector('.panel');
let isMouseDown = false;

document.body,onmousedown = () => isMouseDown = true;
document.body.onmouseup = () => isMouseDown = false;

gridboxes.forEach(gridbox => gridbox.addEventListener('mouseover', function(e){
    if (isMouseDown){
    this.style.background = 'white';
    }
}
));



