const log = console.log;

import { taskCount, taskWrapper, inputTodo, addTodo, inputTodos, clearBtn, } from './helpers.js';

const Todo = (() => {

    let inputValue;
    let preventFromAddingTodo = true;

    let collection = [
        // { name: 'Task 1', complete: false, id: 0 },
        // { name: 'Task 2', complete: false, id: 1 },
        // { name: 'Task 3', complete: false, id: 3 },
        // { name: 'Task 4', complete: false, id: 4 },
        // { name: 'Task 5', complete: false, id: 5 },
        // Project { name: 'Youtube', id: 0, todos: [] }
    ];

    class Project {
        constructor(name) {
            this.name = name;
            this.id = collection.length > 0 ? collection[collection.length - 1].id + 1 : 0;
        }
    }

    class Todo {
        constructor(name) {
            this.name = name;
            this.complete = false;
            this.id = collection.length > 0 ? collection[collection.length - 1].id + 1 : 0;
        }
    }

    const createTodo = (todo) => {
        const task = `
            <div class="task" data-id="${todo.id}">
                <input 
                type="checkbox"
                id="task-${todo.id}"
                />
                <label for="task-${todo.id}" class="js-todo-item">
                <span class="custom-checkbox"></span>
                ${todo.name}
                </label>
            </div>`;
        return task;
    }

    const updateTodoCompletion = (id) => {

        collection.forEach(todo => {
            if (todo.id == id) {
                todo.complete = !todo.complete;
            }
        })
        
        console.log(collection)
    };

    const _displayRemainingTodos = () => {
        taskCount.textContent = `${collection.length} tasks remaining`;
    };

    const removeTodoFromDOM = () => {
        Array.from(taskWrapper.children).forEach(todo => todo.remove());
    }

    const removeValueFromInput = () => {
        inputTodos.forEach(input => input.value = '');
    };

    const addTodoItem = (todo) => {
        collection.push(new Todo(todo));
    } 

    const render = () => {
        if (collection.length === 0) {
            return;
        }
        
        // render through each todo
        collection.forEach(item => {
            taskWrapper.insertAdjacentHTML('beforeend', createTodo(item))
        });

    }

    inputTodo.addEventListener('input', event => {
        inputValue = event.target.value;
    });

    const start = () => {

        _displayRemainingTodos();

        removeTodoFromDOM();

        render();
    }

    addTodo.addEventListener('click', () => {

        if (inputTodo.value == '') {
            preventFromAddingTodo = false;
        } else {
            preventFromAddingTodo = true;
        }

        if (preventFromAddingTodo) {

            addTodoItem(inputValue);

            removeValueFromInput();

            start();
        }
    });

    clearBtn.addEventListener('click', () => {

        // clear completed todos
        collection = collection.filter(todo => todo.complete == false);

        start();
    });
    
    /**
     * @todo
     * 1. Handle different areas of click for todo item
     */
    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('custom-checkbox') ) {
            const id = Number(event.target.parentElement.parentElement.dataset.id);
            updateTodoCompletion(id);
        }
    });

    window.addEventListener('DOMContentLoaded', () => {
        _displayRemainingTodos();

        start();
    });

    return {
        render
    }

})();

Todo.render();