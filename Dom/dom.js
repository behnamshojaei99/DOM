let tableBody = document.querySelector('table tbody');
const table = document.querySelector('table')


function addButton() {
    const button = document.createElement("button");
    button.name = "add";
    button.value = "Add Row";
    button.innerHTML = "Add Row";
    document.body.append(button)
    button.addEventListener('click', addRow);
}

function addRow(e) {
    const row  = document.createElement('tr');
    row.innerHTML = `
        <td>Row${table.rows.length + 1} cell1</td>
        <td>Row${table.rows.length + 1} cell2</td>
    `
    tableBody.append(row)
}

function hoverRow(e) {
    let row = e.target.closest('tr')
    if(!row) return;
    row.style.backgroundColor = 'red';
}


table.addEventListener('mouseover', hoverRow)
document.addEventListener('DOMContentLoaded', addButton)
