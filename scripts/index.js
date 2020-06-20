const log = console.log;

import {
	taskCount,
	taskWrapper,
	inputTodo,
	addTodo,
	inputTodos,
	clearBtn,
	projectAdd,
	projectCreate,
} from './helpers.js';

const Todo = (() => {
	let inputValue;
	let preventFromAddingTodo = true;

    let collection = [];
    
    // let projects = [
    //     {name: 'YouTube', id: 0, todos: [
    //         { name: 'Task 1', id: 0 },
    //         { name: 'Task 2', id: 1 },
    //         { name: 'Task 3', id: 2 },
    //         { name: 'Task 4', id: 3 },
    //     ]},
    
    //     {name: 'Work', id: 1, todos: [
    //         { name: 'Task 1', id: 0 },
    //         { name: 'Task 2', id: 1 },
    //         { name: 'Task 3', id: 2 },
    //         { name: 'Task 4', id: 3 },
    //     ]},
    
    //     {name: 'Grocery', id: 2, todos: [
    //         { name: 'Task 1', id: 0 },
    //         { name: 'Task 2', id: 1 },
    //         { name: 'Task 3', id: 2 },
    //         { name: 'Task 4', id: 3 },
    //     ]},
    // ];
    
    // for (let i = 0; i < projects.length; i++) {
    //     for (let j = 0; j < projects[i].todos.length; j++) {
    
    //     }
    // }

	class Project {
		constructor(name) {
			this.name = name;
			this.id =
				collection.length > 0
					? collection[collection.length - 1].id + 1
					: 0;
		}
	}

	class Todo {
		constructor(name) {
			this.name = name;
			this.complete = false;
			this.id =
				collection.length > 0
					? collection[collection.length - 1].id + 1
					: 0;
		}
	}

	const createProject = (project) => {
		const projectHTML = `<li class="list-name">${project.name}</li>`;
		return projectHTML;
	};

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
	};

	const updateTodoCompletion = (id) => {
		collection.forEach((todo) => {
			if (todo.id == id) {
				todo.complete = !todo.complete;
			}
		});

	};

	const _displayRemainingTodos = () => {
        const totalTodos = collection.filter(todo => todo.complete !== true);
        taskCount.textContent = `${totalTodos.length} tasks remaining`;

	};

	const removeTodoFromDOM = () => {
		Array.from(taskWrapper.children).forEach((todo) => todo.remove());
	};

	const removeValueFromInput = () => {
		inputTodos.forEach((input) => (input.value = ''));
	};

	const addTodoItem = (todo) => {
		collection.push(new Todo(todo));
	};

	const render = () => {
		if (collection.length === 0) {
			return;
		}

		// render through each todo
		collection.forEach((item) => {
			taskWrapper.insertAdjacentHTML('beforeend', createTodo(item));
		});
	};

	inputTodo.addEventListener('input', (event) => {
		event.preventDefault();
		inputValue = event.target.value;
	});

	const start = () => {
		_displayRemainingTodos();

		removeTodoFromDOM();

		render();
	};

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
		collection = collection.filter((todo) => todo.complete == false);

		start();
    });
    

    projectCreate.addEventListener('input', () => {

    });

    projectAdd.addEventListener('click', () => {

    });

	window.addEventListener('click', (event) => {
		if (event.target.classList.contains('custom-checkbox') || event.target.classList.contains('js-todo-item')) {
			const id = Number(event.target.closest('.task').dataset.id);
			updateTodoCompletion(id);
            _displayRemainingTodos();
        }
	});

	window.addEventListener('DOMContentLoaded', () => {
		_displayRemainingTodos();

		start();
	});

	return {
		render,
	};
})();

Todo.render();
