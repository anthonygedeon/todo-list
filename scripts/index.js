const log = console.log;

import { taskCount, taskWrapper } from './helpers.js';

const Todo = (() => {

    class Tasks {
        constructor() {
            this.collection = [];
        }

        addTodo(todo) {
            this.collection.push(todo)
        }

        removeTodo() {

        }

        numberOfTodos() {
            return this.collection.length;
        }

    }

    class Project {
        constructor(name) {
            this.name = name;
            this.id = null;
        }
    }

    class Todo {
        constructor(name) {
            this.name = name;
            this.complete = false;
            this.id = null;
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

    const tasks = new Tasks();

    const appendTodos = () => {
        tasks.addTodo(new Todo('Task 1'))
    }

    appendTodos();

    const _render = () => {
        taskCount.textContent = `${tasks.numberOfTodos()} tasks remaining`;

        // render through each todo
        tasks.collection.forEach(item => {
            taskWrapper.insertAdjacentHTML('beforeend', createTodo(item))
        })
    }

    const start = () => {
        _render();
    };

    return {
        start
    }

})();

Todo.start()
