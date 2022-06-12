const container = document.querySelector('#container');

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(16, 16);

/* Button */

const gridNumber = document.querySelector('#gridNumber');

gridNumber.addEventListener('click', () => {
    container.innerHTML = '';
    let userChoice = prompt("How large would you like your grid?","eg. 64 - larger numbers may cause slow performance!");
    if(userChoice > 0 && userChoice < 101) {
        makeRows(userChoice,userChoice);
    }
    else alert("Too high!");
});

/* Etch function 

const cell = document.querySelectorAll('.grid-item');

for (let i = 0; i < cell.length; i++) {
    cell[i].addEventListener('mouseover', () => {
    cell[i].style.backgroundColor = 'blue';
})
    cell[i].addEventListener('mouseout', () => {
    cell[i].style.backgroundColor = 'default';
})
};
*/