const addTask = () => {
    const newTask = document.getElementById("new-task-text");
    if (newTask.value) {
        todoTasks.push(newTask.value);
        todoTasksStatus.push(false);
        todoTasksImportant.push(false); // Initialize important status as false
        newTask.value = "";
        updateTodoList();
    }
};

const updateTodoList = () => {
    const todoList = document.getElementById("todo-list");
    todoList.innerHTML = "";
    for (const [index, task] of todoTasks.entries()) {
        const newTodoTaskElement = createNewTodoItemElement(task, index);
        todoList.appendChild(newTodoTaskElement);
    }
};

const createNewTodoItemElement = (task, index) => {
    const newTodoTaskTextElement = document.createElement("p");
    newTodoTaskTextElement.innerText = task;
    
    if (todoTasksStatus[index] == true) {
        newTodoTaskTextElement.classList.add("complete");
    }

    if (todoTasksImportant[index] == true) {
        newTodoTaskTextElement.classList.add("important");
    }

    const newTodoTaskElement = document.createElement("li");
    newTodoTaskElement.appendChild(newTodoTaskTextElement);
    
    const completeButtonElement = document.createElement("input");
    completeButtonElement.type = "button";
    completeButtonElement.value = "Completed";
    completeButtonElement.onclick = function () {
        toggleComplete(index);
    };
    newTodoTaskElement.appendChild(completeButtonElement);

    const importantButtonElement = document.createElement("input");
    importantButtonElement.type = "button";
    importantButtonElement.value = "Important";
    importantButtonElement.onclick = function () {
        toggleImportant(index);
    };
    newTodoTaskElement.appendChild(importantButtonElement);

    return newTodoTaskElement;
};

const toggleComplete = (index) => {
    // If it is complete, set it to incomplete. 
    // If it is incomplete, set it to complete.
    if (todoTasksStatus[index] == false) {
        todoTasksStatus[index] = true;
    } else {
        todoTasksStatus[index] = false;
    }
    updateTodoList();
};

let todoTasksImportant = []; // New array to track important status
let todoTasks = [];
let todoTasksStatus = [];

updateTodoList();

const todoList = document.getElementById("todo-list");

for (const [index, task] of todoTasks.entries()) {
    const newTodoTaskElement = createNewTodoItemElement(task, index);
    // Add the <li> element to the list
    todoList.appendChild(newTodoTaskElement);
}

const toggleImportant = (index) => {
    todoTasksImportant[index] = !todoTasksImportant[index];
    updateTodoList();
};