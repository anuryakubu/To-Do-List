const input = document.getElementById('list')
const addButton = document.getElementById('add')
const deleteButton = document.getElementById('delete')
const wakeList = document.getElementById('wake')
const prayList = document.getElementById('pray')
const meditateList = document.getElementById('meditate')
const appendChildList = document.getElementById('orderedList')

const List1 = document.getElementById('list1')
const List2 = document.getElementById('list2')
const List3 = document.getElementById('list3')

const check = document.querySelector('input[type="checkbox"]');

console.log(appendChildList)

addButton.addEventListener('click', add)



 /* check.onchange = () => {
    if (check.checked) {
        deleteButton.addEventListener('click', () => {
            check.parentNode.remove()

        })
    }
    
}*/ 

function deleted(element) {
    //alert('do something')
    if (element.checked) {
       deleteButton.addEventListener('click', () => {
        element.parentNode.remove()
       })
       
    }
        
        
        
    
}



function add() {

    if (input.value === "") {
        return;
    }

    const li = document.createElement('li')
    li.className = 'lists'
    const checkbox = document.createElement('input')
    checkbox.type = "checkbox"
    checkbox.setAttribute('onchange', 'deleted(this)');

    appendChildList.appendChild(li)
    
    li.innerHTML = input.value + "  " ;
    li.appendChild(checkbox)
    input.value = ""
    console.log(appendChildList)
    
}



