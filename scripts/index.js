class TaskModel {
    
    constructor() {
        this.lists = [
            // { name: 'Work', id: 0, todos: [
            //     { name: 'Check E-mails', id: 0, complete: false },
            //     { name: 'Read slack messages', id: 2, complete: false },
            //     { name: 'Update MySQL database', id: 3, complete: false },
            // ]},
            // { name: 'YouTube', id: 1, todos: [
            //     { name: 'Start YouTube', id: 0, complete: false },
            //     { name: 'Create thumbnail', id: 1, complete: false },
            //     { name: 'Edit video', id: 2, complete: false },
            //     { name: 'Post', id: 3, complete: false },
            // ]},
            // { name: 'Grocery', id: 2, todos: [
            //     { name: 'Milk', id: 0, complete: false },
            //     { name: 'Bread', id: 1, complete: false },
            //     { name: 'Eggs', id: 2, complete: false },
            //     { name: 'Hot Fries', id: 3, complete: false },
            //     { name: 'Cabbage', id: 4, complete: false },
            //     { name: 'Salad', id: 5, complete: false },
            // ]}
        ];
    }

    addItem(text) {
        const project = {
            name: text,
            todos: [],
            id: this.lists.length > 0 ? this.lists[this.lists.length - 1].id + 1: 0,
        }

        return this.lists.push(project);
    }

    addTodo(text, idForProject) {
        const todo = {
            name: text,
            complete: false,
            id: this.lists[idForProject].todos.length > 0 ? this.lists[idForProject].todos[this.lists[idForProject].todos.length - 1].id + 1: 0,
        };

        this.getList(idForProject).todos.push(todo)
    }

    getList(id) {
        return this.lists.find(list => list.id === id);
    }

    removeItem(id) {
        return this.lists = this.lists.filter(list => list.id !== id);
    }

    toggleCompleteTodo(idOfProject, idOfTodo) {
        const todo = this.lists[idOfProject].todos.find(todo => todo.id === idOfTodo)
        return todo.complete = !todo.complete;
    }

    removeTodo(id) {
        return this.lists[id].todos = this.lists[id].todos.filter(todo => todo.complete === false);
    }

}

class TaskView {
    
    constructor() {

        this.listWrapper = document.querySelector('.task-list');

        this.list = document.createElement('li');
        this.listClass = 'list-name';
        this.listActiveClass = 'active-list';

        this.inputListData = document.querySelector('.js-project-create');

    }

    completeTodo(list) {
        console.log(list)
    }

    removeDuplicateElements(element) {
        document.querySelectorAll(element).forEach(node => node.remove());
    }

    removeValueFromInput(input) {
        document.querySelector(input).value = '';
    }

    todosRemaining(remaining) {
        document.querySelector('.task-count').textContent = `${remaining} tasks remaining`;
    }

    defaultList() {
        const firstItemInList = document.querySelector('.task-list :first-child');
        
        if (firstItemInList !== null) {

            firstItemInList.click();
        } else {
            this.todosRemaining(0);
            this.removeDuplicateElements('.task');
            this.changeTodoHeading({name: '', id: 0});
        }
        

    }

    listHasFocus() {

        const ACTIVE_CLASS = 'active-list';

        Array.from(this.listWrapper.children).forEach(list => {
            if (list.classList.contains(ACTIVE_CLASS)) {
                list.classList.remove(ACTIVE_CLASS);
            }
        });
        
        event.target.classList.add(ACTIVE_CLASS);
    }
    
    updateView(listArray) {
        // remove all lists from DOM
        this.removeDuplicateElements('.list-name');

        // loop through all objects in model's lists array 
        listArray.forEach(list => {
            // re render lists to list wrapper
            document.querySelector('.task-list').insertAdjacentHTML('beforeend', `<li class="list-name" data-id="${list.id}">${list.name}</li>`);
        });

        // remove value from input
        this.removeValueFromInput('.js-project-create');
    }

    updateViewTodo({ todos }) {

        this.removeDuplicateElements('.task');

        todos.forEach(todo => {
            let todoHTML = `
                <div class="task" data-id="${todo.id}">

                    <input 
                    type="checkbox"
                    id="task-${todo.id}"
                    ${todo.complete ? 'checked' : ''}
                    />
                    <label for="task-${todo.id}">
                    <span class="custom-checkbox"></span>
                    ${todo.name}
                    </label>
                </div> `;
            document.querySelector('.tasks').insertAdjacentHTML('beforeend', todoHTML);
        });

        this.removeValueFromInput('.js-task-input');
    }

    changeTodoHeading({ name, id }) {
        document.querySelector('.list-title').setAttribute('data-id', id);
        document.querySelector('.list-title').textContent = name;
    }
}

class TaskController {
    
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    addListHandler() {
        document.querySelector('.js-project-add').addEventListener('click', (event) => {
            event.preventDefault();
            this.model.addItem(this.view.inputListData.value);
            this.view.updateView(this.model.lists);
            this.view.defaultList();

        });
    }

    loaded() {
        window.addEventListener('DOMContentLoaded', (event) => {
            this.view.updateView(this.model.lists)
        });
    }

    listHandler() {
        this.view.listWrapper.addEventListener('click', (event) => {
            if (event.target.matches('.list-name')) {
                const listID = Number(event.target.dataset.id);
                const currentList = this.model.getList(listID);
                this.view.todosRemaining(currentList.todos.length);
                this.view.listHasFocus();
                this.view.updateViewTodo(currentList)
                this.view.changeTodoHeading(currentList);
            }
        })
    }

    addTodoHandler() {
        document.querySelector('.js-btn-create-todo').addEventListener('click', (event) => {
            const id = Number(event.target.parentElement.parentElement.parentElement.parentElement.children[0].children[0].dataset.id)
            const todoText = document.querySelector('.js-task-input').value;
            event.preventDefault();
            this.model.addTodo(todoText, id);
            this.view.updateViewTodo(this.model.lists[id]);
            this.view.todosRemaining(this.model.lists[id].todos.length);
        });
    }

    todoHandler() {
        window.addEventListener('click', (event) => {
            if (event.target.matches('.custom-checkbox')) {
                const idList = Number(event.target.parentElement.parentElement.parentElement.parentElement.parentElement.children[0].children[0].dataset.id);
                const idTodo = Number(event.target.parentElement.parentElement.dataset.id);
                this.model.toggleCompleteTodo(idList, idTodo);
                const total = this.model.getList(idList).todos.filter(todo => todo.complete === false).length;
                this.view.todosRemaining(total);
            }
        });
    }

    clearTodoHandler() {
        document.querySelector('.js-btn-clear').addEventListener('click', (event) => {
            const id = Number(event.target.parentElement.parentElement.parentElement.children[0].children[0].dataset.id)
            this.model.removeTodo(id);
            this.view.updateViewTodo(this.model.lists[id]);
            const totalAfterTodosCleared = this.model.getList(id);
            this.view.todosRemaining(totalAfterTodosCleared.todos.length);
            console.log(this.model.lists)
        })
    }

    deleteList() {
        document.querySelector('.js-btn-delete-list').addEventListener('click', (event) => {
            const id = Number(event.target.parentElement.parentElement.parentElement.children[0].children[0].dataset.id);
            this.model.removeItem(id);
            this.view.updateView(this.model.lists);
            this.view.defaultList();
        });
    }

    start() {
        // load all data when page DOM is loaded
        this.loaded();

        // listen for clicks on add list btn
        this.addListHandler();

        // list for click on list text
        this.listHandler();

        // list for a click on remove list
        this.deleteList();

        this.addTodoHandler();

        this.todoHandler();

        this.clearTodoHandler();
    }

}

const controller = new TaskController(new TaskModel(), new TaskView());

controller.start();

