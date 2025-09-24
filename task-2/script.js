// Wait for the HTML document to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // Get the necessary elements from the DOM
    const taskInput = document.getElementById('taskInput');
    const addButton = document.getElementById('addButton');
    const taskList = document.getElementById('taskList');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get text and remove whitespace

        // Check if the input is not empty
        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }

        // 1. Create the list item (li)
        const li = document.createElement('li');

        // 2. Create the task text span
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        // 3. Create a div for action buttons
        const actionsDiv = document.createElement('div');
        actionsDiv.classList.add('actions');

        // 4. Create the Complete button
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.classList.add('complete-btn');

        // 5. Create the Delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');

        // 6. Append buttons to the actions div
        actionsDiv.appendChild(completeButton);
        actionsDiv.appendChild(deleteButton);

        // 7. Append the task span and actions div to the list item
        li.appendChild(taskSpan);
        li.appendChild(actionsDiv);
        
        // 8. Add the new list item to the task list
        taskList.appendChild(li);

        // 9. Clear the input field
        taskInput.value = '';
    }

    // Event listener for the Add button
    addButton.addEventListener('click', addTask);

    // Event listener to add task when Enter key is pressed
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Event listener for clicks on the task list (for completing or deleting tasks)
    taskList.addEventListener('click', (event) => {
        const clickedElement = event.target;

        // Check if the Complete button was clicked
        if (clickedElement.classList.contains('complete-btn')) {
            const li = clickedElement.closest('li');
            li.classList.toggle('completed');
        }

        // Check if the Delete button was clicked
        if (clickedElement.classList.contains('delete-btn')) {
            const li = clickedElement.closest('li');
            taskList.removeChild(li);
        }
    });

});