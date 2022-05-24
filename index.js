const container = document.querySelector('#container');
const button = document.querySelector('#grid');
const rainbow = document.querySelector('#rainbow');
let column = 16;
let rown = column-1;

// add an eventlistener to the button 
button.addEventListener('click', () => {
    column = prompt('Enter the grid number (< 100): ');
    if (column > 100) {
        alert('invalid grid number, grid number should be less than 100');
    } else {
        rown = column-1;
        console.log(column, rown);
    
        // remove the child elements in the div
        var child = container.lastElementChild;
        while (child) {
            container.removeChild(child);
            child = container.lastElementChild;
        }
    
        // insert the new grid into the div
        makeColumns(column);
        makeRows(rown);
    }
})


function makeColumns(column) {
    let size = 640;
    let width = size/column;
    let height = size/column;
    for (let i = 0; i < column; i++) {
        let column = document.createElement('div');

        // change div's bg color when mouse hover
        column.onmouseover = function() {
            this.style.backgroundColor = 'black';
        }
        column.setAttribute('style', `background-color: white; width: ${width}px; height: ${height}px`);
        container.appendChild(column).className = 'gridCol';
    }
}

function makeRows(rown) {
    if (rown === 0) {
        return;
    } else {
        for (let i = 0; i < rown; i++) {
            makeColumns(column);
            console.log('create row');
        }
    }
}

makeColumns(column);
makeRows(rown);

