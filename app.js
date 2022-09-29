let size = 32;
const btn = document.querySelector('#set-grid')
var elementExist;
const grid = document.createElement('div');
const body = document.querySelector('body');

function createGrid() {
  
  

  grid.setAttribute("class","container-grid");
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
  body.appendChild(grid);
  
  for(let i = 0; i<size*size; i++){
    const newDiv =document.createElement('div');
    newDiv.setAttribute("class","box")
    newDiv.setAttribute("id","box"+i)
    newDiv.addEventListener('mousedown', () => {
      newDiv.style.backgroundColor="grey";
    })
    newDiv.addEventListener('mouseover', () => {
      newDiv.style.background="grey";
    })
    grid.appendChild(newDiv);
  }
  

}

btn.addEventListener('click', () => {
  body.removeChild(grid);

  setGrid();
  
})

createGrid();


function setGrid() {

  let checkSize = prompt("Choose Between 1 and 100 to set the grid")

  if(checkSize == 0 || checkSize > 100) {

    createGrid();
    let boxes = document.querySelectorAll(".box");
    boxes.forEach((x) => {
      x.style.background="white";
    })
    alert("Choose a valid value");
    checkSize=1
    return; 
  }
  else{size = checkSize}

  createGrid();

  let boxes = document.querySelectorAll(".box");
  boxes.forEach((x) => {
    x.style.background="white";
  })

  

};
