const input = document.getElementById('list')
const addButton = document.getElementById('add')
const deleteButton = document.getElementById('delete')
const appendList = document.getElementById('lists')
const appendChildList = document.getElementById('orderedList')

addButton.addEventListener('click', add)

function add() {
    appendChildList.appendChild(input.value)
}