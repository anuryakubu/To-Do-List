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


fetch('http://localhost:3032').then(res => {
return res.json()
}).then(tasks => {
    
    tasks.map(taks => {
        let output = ""
        
        output = `<li id="list3" class="lists">${taks.task}  <input type="checkbox" id='medicate' onchange="deleted(this)"></li>`
        appendChildList.innerHTML += output

    })
    console.log(tasks)
})


addButton.addEventListener('click', add)


function deleted(element) {
    //alert('do something')

/* fetch('http://localhost:3032').then(res => {
return res.json()
}).then(tasks => {
    
    tasks.map(taks => {
        
        if (element.parentNode.textContent.includes(taks.task)) {
            console.log(taks.id)
            return taks.id
            
        }
    })
})*/

async function fetchApi () {

    try {
        const res = await fetch('http://localhost:3032')
        const tasks = await res.json()

        return tasks

    } catch(e) {
        console.log(e)
    }

}


    if (element.checked) {
       deleteButton.addEventListener('click', () => {

        fetchApi().then(tasks => {
            
            tasks.map(taks => {
        
                if (element.parentNode.textContent.includes(taks.task)) {
                    
                    fetch('http://localhost:3032/del', {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    id: taks.id
                })
                })
                .then(res => {
                    return res.json()
                })
                .then(task => {
                    element.parentNode.remove()
                    console.log(task + ' forever')
                })

                    
                } })

        })  

       })
       
    }
}



function add() {

    if (input.value === "") {
        return;
    }

   fetch('http://localhost:3032/add', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            task: input.value
        })
    }).then(res => {
        return res.json();
    }).then(tasks => {
        
    const li = document.createElement('li')
    li.className = 'lists'
    const checkbox = document.createElement('input')
    checkbox.type = "checkbox"
    checkbox.setAttribute('onchange', 'deleted(this)');

    appendChildList.appendChild(li)
    
    li.innerHTML = tasks.task + "  " ;
    li.appendChild(checkbox)
    input.value = ""
    console.log(appendChildList)
    console.log(tasks.task)

    })   
}



