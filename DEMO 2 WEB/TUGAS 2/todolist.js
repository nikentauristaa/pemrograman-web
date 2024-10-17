function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskValue = taskInput.value;

    if (taskValue === '') return;

    const taskList = document.getElementById('tasks');
    const taskItem = document.createElement('li');
    
    const taskText = document.createElement('input');
    taskText.type = 'text';
    taskText.value = taskValue;
    taskText.disabled = true;

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit');
    editButton.onclick = function() {
        if (taskText.disabled) {
            taskText.disabled = false;
            taskText.focus();
            editButton.textContent = 'Save';
        } else {
            taskText.disabled = true;
            editButton.textContent = 'Edit';
        }
    };

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        taskList.removeChild(taskItem);
    };

    taskItem.appendChild(taskText);
    taskItem.appendChild(editButton);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
    taskInput.value = '';
}
