function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
    if (taskText === "") return;
  
    const li = document.createElement('li');
    li.textContent = taskText;
  
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
      li.remove();
    };
  
    li.appendChild(deleteButton);
    document.getElementById('task-list').appendChild(li);
    taskInput.value = '';
  }
  