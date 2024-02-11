function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        const newTaskDiv = document.createElement('div');
        newTaskDiv.className = 'task';

        const taskText = document.createElement('span');
        taskText.textContent = taskInput.value;

        const taskButtons = document.createElement('div');
        taskButtons.className = 'task-buttons';

        const complete = document.createElement('input');
        complete.type = 'checkbox';
        complete.className = 'complete-checkbox';
        complete.onclick = function () {
            completeTask(newTaskDiv, complete);
        };

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-btn';
        deleteButton.textContent = '✗';
        deleteButton.onclick = function () {
            deleteTask(newTaskDiv);
        };

        taskButtons.appendChild(complete);
        taskButtons.appendChild(deleteButton);

        newTaskDiv.appendChild(complete);
        newTaskDiv.appendChild(taskText);
        newTaskDiv.appendChild(deleteButton);

        taskList.appendChild(newTaskDiv);
        taskInput.value = '';
    }
}

function deleteTask(taskDiv) {
    const taskList = document.getElementById('taskList');
    taskList.removeChild(taskDiv);
}

function completeTask(taskDiv, checkbox) {
    const taskText = taskDiv.querySelector('span');
    taskText.classList.toggle('completed');

    if (checkbox.checked) {
        checkbox.disabled = true;
    }
}
