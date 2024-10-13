let text = document.getElementsByClassName('text')[0];
let btn = document.getElementsByClassName('btn')[0];
let todolist = document.getElementsByClassName('todolist')[0];

// Add task functionality
btn.addEventListener('click', () => {
    if (text.value === '') {
        alert('Insert some text first');
    } else {
        // Create a new task HTML structure
        const taskHTML = `
            <div class="task">
                <input class="check" type="checkbox"><span class="work">${text.value}</span><span class="x">x</span>
            </div>`;
        todolist.insertAdjacentHTML('beforeend', taskHTML);
        text.value = '';  // Clear input after adding
        saveData();  // Save data after adding a task
    }
});

// Remove task functionality
todolist.addEventListener('click', function (e) {
    if (e.target.classList.contains('x')) {
        e.target.parentElement.remove();
        saveData();  // Save data after removing a task
    }
});

// Mark task as done functionality
todolist.addEventListener('click', (e) => {
    if (e.target.classList.contains('check')) {
        e.target.parentElement.classList.toggle('done');  // Toggle 'done' on the parent task div
        saveData();  // Save data after marking a task as done
    }
});

// Function to save tasks to localStorage
function saveData() {
    const tasks = Array.from(todolist.children).map(task => {
        return {
            text: task.querySelector('.work').textContent,
            done: task.querySelector('.check').checked
        };
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));  // Save tasks as JSON
}

// Function to load tasks from localStorage
function showData() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];  // Load tasks from localStorage
    tasks.forEach(task => {
        const taskHTML = `
            <div class="task ${task.done ? 'done' : ''}">
                <input class="check" type="checkbox" ${task.done ? 'checked' : ''}><span class="work">${task.text}</span><span class="x">x</span>
            </div>`;
        todolist.insertAdjacentHTML('beforeend', taskHTML);  // Insert task into the DOM
    });
}

// Show saved tasks when the page loads
showData();
