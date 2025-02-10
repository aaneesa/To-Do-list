function addTask() {
  const taskInput = document.getElementById('task-input');
  const taskTime = document.getElementById('task-time');
  const taskList = document.getElementById('task-list');

  const taskName = taskInput.value;
  const taskDeadline = taskTime.value;

  if (taskName.trim() === '') {
    return;
  }

  const taskItem = document.createElement('li');
  taskItem.innerHTML = `
    <span>${taskName} - ${taskDeadline ? taskDeadline : 'No time set'}</span>
    <button onclick="deleteTask(this)">Delete</button>
  `;
  
  taskItem.addEventListener('click', function() {
    taskItem.classList.toggle('completed');
  });

  taskList.appendChild(taskItem);

  taskInput.value = '';
  taskTime.value = '';
}

function deleteTask(button) {
  const taskItem = button.parentElement;
  taskItem.remove();
}
