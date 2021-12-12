let tableBody = document.querySelector('table tbody');
const table = document.querySelector('table')


function addButton() {
    const button = document.createElement("button");
    button.name = "add";
    button.value = "Add Row";
    button.innerHTML = "Add Row";
    document.body.append(button)
    button.addEventListener('click', (e) => addRow(e, document.querySelector('input').value));
}

function addRow(e , number) {
    const fragment = new DocumentFragment()
    for (let i = 0; i < number; i++) {
        const row  = document.createElement('tr');
        row.innerHTML = `
        <td>Row${table.rows.length + 1 + i} cell1</td>
        <td>Row${table.rows.length + 1 + i} cell2</td>
    `;
        fragment.append(row);
    }
    console.log(fragment)
    tableBody.append(fragment)
}

function hoverRow(e) {
    let row = e.target.closest('tr')
    if(!row) return;
    row.style.backgroundColor = 'red';
}
function addInput() {
    const input = document.createElement('input');
    input.placeholder = 'Enter number of Rows to add...'
    input.type = 'number';
    table.after(input)
}

addInput()

table.addEventListener('mouseover', hoverRow)
document.addEventListener('DOMContentLoaded', addButton)
