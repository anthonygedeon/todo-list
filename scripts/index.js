const log = console.log;

import { taskCount, taskWrapper, inputTodo, addTodo } from './helpers.js';

const Todo = (() => {

    const collection = [
        { name: 'Task 1', complete: false, id: 0 },
        { name: 'Task 2', complete: false, id: 1 },
        { name: 'Task 3', complete: true, id: 3 },
        { name: 'Task 4', complete: false, id: 4 },
        { name: 'Task 5', complete: true, id: 5 },
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
            <div class="task">
                <input 
                type="checkbox"
                id="task-${todo.id}"
                />
                <label for="task-${todo.id}">
                <span class="custom-checkbox"></span>
                ${todo.name}
                </label>
            </div>`
        return task;
    }

    const _displayRemainingTodos = () => {
        taskCount.textContent = `${collection.length} tasks remaining`;
    };

    const _render = () => {

        _displayRemainingTodos();

        // render through each todo
        collection.forEach(item => {
            taskWrapper.insertAdjacentHTML('beforeend', createTodo(item))
        })
    }

    const start = () => {
        _render();
    };

    inputTodo.addEventListener('input', event => {
        console.log(event.target.value);
    });

    return {
        start
    }

})();

Todo.start()
