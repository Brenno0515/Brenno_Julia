document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();
    addTask(document.getElementById('input').value);
    document.getElementById('input').value = '';
});

let tasks = [];

function addTask(task) {
    const taskElement = document.createElement('div');
    taskElement.classList.add('task');
    taskElement.innerText = task;
    taskElement.addEventListener('click', function() {
        taskElement.classList.toggle('completed');
    });
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', function() {
        taskElement.remove();
    });
    taskElement.appendChild(deleteButton);
    document.getElementById('tasks').appendChild(taskElement);
    tasks.push({task: task, completed: false});
}

function filter(type) {
    let filteredTasks = tasks;
    if (type === 'completed') {
        filteredTasks = tasks.filter(task => task.completed);
    } else if (type === 'pending') {
        filteredTasks = tasks.filter(task => !task.completed);
    }
    document.getElementById('tasks').innerHTML = '';
    filteredTasks.forEach(function(task) {
        addTask(task.task);
    });
}
