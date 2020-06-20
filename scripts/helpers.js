const taskCount = document.querySelector('.task-count');
const taskWrapper = document.querySelector('.tasks');
const inputTodo = document.querySelector('.new.task');
const addTodo = document.querySelector('.js-btn-create');
const inputTodos = document.querySelectorAll('.new.task');
const clearBtn = document.querySelector('.js-btn-clear');
const projectTitleWrapper = document.querySelector('.task-list');
const listTitle = document.querySelector('.list-title');
const projectAdd = document.querySelector('.js-project-add');
const projectCreate = document.querySelector('.js-project-create');


export { 
    taskCount, 
    taskWrapper, 
    inputTodo,
    addTodo,
    inputTodos,
    clearBtn,
    projectAdd,
    projectCreate
}