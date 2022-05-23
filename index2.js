const container = document.querySelector('#container');
const button = document.querySelector('button');


function makeRows(rown) {
    for (let i = 0; i < rown; i++) {
        let row = document.createElement('div');

        // change div's bg color when mouse hover
        row.onmouseover = function() {
            this.style.backgroundColor = 'black';
        }

        container.appendChild(row).className = 'gridRow';
    }
}

function makeColumns(column) {
    for (let i = 0; i < column; i++) {
        makeRows(16);
    }
}

function setRows() {
    const rowSelect = document.querySelectorAll('.gridRow')
    rowSelect.forEach((row) => {
        row.setAttribute('style', 'background-color: white; width: 40px; height: 40px');
    })
}

makeRows(16);
makeColumns(15);
setRows();