document.addEventListener('DOMContentLoaded', () => {
    const addtask = document.getElementById('addTask');
    const deletetask = document.getElementById('deleteTask');
    const taskinput = document.getElementById('taskInput');
    const tasklistout = document.getElementById('taskListout');

    addtask.addEventListener('click', () => {
        const tasktext = taskinput.value.trim();
        if (tasktext !== '') {
            const li = document.createElement('li');
            li.textContent= tasktext;
            li.classname = 'list-group-item';
            
            li.addEventListener('click', () => {
                li.classList.toggle('completed');
            });
            
            tasklistout.appendChild(li);
            taskinput.value = '';
        }
    });
    
    deletetask.addEventListener('click', () => {
        const task = document.querySelectorAll('tasklistout-li');
        task.forEach(task => {
            if(task.classlist.contains('completed')) {
                task.remove()
            }
        });
    });
});