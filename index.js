// Sets important constants and variables

const container = document.getElementById('container');
const button = document.getElementById('button');
let rows = document.getElementById('gridRow');
let cells = document.getElementById('cell');

// Creates a default grid sized 16x16
function defaultGrid() {
    makeRows(16);
    makeColumns(16);
}

// Take (rows, columns) input and makes a grid
function makeRows(rowNum) {

    // Creates rows
    for (r = 0; r < rowNum; r++) {
        let row = document.createElement('div');
        row.textContent = '1'
        container.appendChild(row).className = 'gridRow';
    };
};

// Creates columns
function makeColumns(cellNum) {
    for (i = 0; i < rows.clientHeight; i++) {
        for (j = 0; j < cellNum; j++) {
            let newCell = document.createElement('div');
            rows[j].appendChild(newCell).className = 'cell';
        }
    }
}

document.addEventListener('load', defaultGrid);