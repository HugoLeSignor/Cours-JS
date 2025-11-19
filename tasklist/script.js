const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const errorMsg = document.getElementById('errorMsg');
const todoList = document.getElementById('todoList');
const doneList = document.getElementById('doneList');
const dateInput = document.getElementById('dateInput')

let tasks = []

function render() {
    todoList.innerHTML = ''
    doneList.innerHTML = ''

    tasks.forEach(task => {
        const li = document.createElement('li')

        const taskText = document.createElement('span')
        taskText.textContent = task.name
        li.appendChild(taskText)

        if (task.date) {
            const dateInfo = formatDate(task.date)
            const dateSpan = document.createElement('span')
            dateSpan.textContent = ' (' + dateInfo.text + ')'
            dateSpan.style.color = dateInfo.color
            li.appendChild(dateSpan)
        }

        const editBtn = document.createElement('button')
        editBtn.textContent = 'Modifier'
        editBtn.onclick = () => startEdit(task)
        li.appendChild(editBtn)

        const statusBtn = document.createElement('button')
        if (task.done) {
            statusBtn.textContent = 'En cours'
        } else {
            statusBtn.textContent = 'Terminé'
        }
        statusBtn.onclick = () => toggleDone(task)
        li.appendChild(statusBtn)

        const delBtn = document.createElement('button')
        delBtn.textContent = 'Supprimer'
        delBtn.onclick = () => deleteTask(task)
        li.appendChild(delBtn)

        if (task.done) {
            doneList.appendChild(li)
        } else {
            todoList.appendChild(li)
        }
    })
}

function addTask() {
    const name = taskInput.value.trim()
    const date = dateInput.value

    if (!name) {
        errorMsg.textContent = 'Le nom de la tâche ne peut pas être vide'
        return
    }

    if (tasks.some(t => t.name === name)) {
        errorMsg.textContent = 'La tâche existe déjà'
        return
    }

    tasks.push({ name, date, done: false })
    taskInput.value = ''
    dateInput.value = ''
    render()
}

function deleteTask(task) {
    tasks = tasks.filter(t => t !== task)
    render()
}

function toggleDone(task) {
    task.done = !task.done
    render()
}

function startEdit(task) {
    const newName = prompt('Modifier la tâche :', task.name);
    
    if (newName === null) {
        return;
    }
    
    const trimName = newName.trim();
    
    if (!trimName) {
        errorMsg.textContent = 'Le nom de la tâche ne peut pas être vide';
        return;
    }
    
    if (trimName !== task.name && tasks.some(t => t.name === trimName)) {
        errorMsg.textContent = 'La tâche existe déjà';
        return;
    }
    
    task.name = trimName;
    render();
}

function formatDate(dateString) {
    if (!dateString) return ''

    const taskDate = new Date(dateString)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    taskDate.setHours(0, 0, 0, 0)

    const day = taskDate.getDate()
    const month = taskDate.getMonth() + 1
    const year = taskDate.getFullYear()

    let color
    if (taskDate < today) {
        color = 'red'
    } else if (taskDate.getTime() === today.getTime()) {
        color = 'orange'
    } else {
        color = 'green'
    }

    return { text: `${day}/${month}/${year}`, color }
}

addTaskBtn.onclick = addTask