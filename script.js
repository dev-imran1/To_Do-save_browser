const addButton = document.getElementById("addTask");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("tasklist");

loadTask();
function addTask() {
    const task = taskInput.value.trim();

    if (task) {
        createTaskElement(task);
        taskInput.value = "";
        saveTask()
    } else {
        alert('please enter a task')
    }
}


addButton.addEventListener('click', addTask)


function createTaskElement(task) {
    const listItem = document.createElement('li');

    listItem.textContent = task;

    const deleteButton = document.createElement('button');

    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteTask';

    listItem.appendChild(deleteButton)
    taskList.appendChild(listItem);

    deleteButton.addEventListener('click', function(){
        taskList.removeChild(listItem);
        saveTask()
    })
}


function saveTask() {
    let tasks = [];

    taskList.querySelectorAll('li').forEach(function (item) {
        tasks.push(item.textContent.replace('Delete', '').trim());
    });

    localStorage.setItem('task', JSON.stringify(tasks))
}

function loadTask() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(createTaskElement);
}