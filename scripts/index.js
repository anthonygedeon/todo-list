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
            //     { name: 'Edit vido', id: 2, complete: false },
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

    removeTodo(id) {
        return this.lists.todos = this.lists.todos.filter(list => list.id !== id);
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

    removeDuplicateElements(element) {
        document.querySelectorAll(element).forEach(node => node.remove());
    }

    removeValueFromInput(input) {
        document.querySelector(input).value = '';
    }

    todosRemaining(remaining) {
        document.querySelector('.task-count').textContent = `${remaining} tasks remaining`;
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

    populateTodos(list) {

        document.querySelectorAll('.task').forEach(todo => todo.remove())

        const todos = list.todos.map(todo => {
            return `
                <div class="task">
                    <input 
                    type="checkbox"
                    id="task-${todo.id}"
                    
                    />
                    <label for="task-${todo.id}" >
                    <span class="custom-checkbox"></span>
                    ${todo.name}
                    </label>
                </div>
            `;
        });

        todos.forEach(todo => {
            document.querySelector('.tasks').insertAdjacentHTML('beforeend', todo);
        })
    
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
                this.view.populateTodos(currentList);
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
            this.view.todosRemaining(this.model.lists[id].todos.length)

        });
    }

    deleteList() {
        document.querySelector('.js-btn-delete-list').addEventListener('click', (event) => {
            const id = Number(event.target.parentElement.parentElement.parentElement.children[0].children[0].dataset.id);
            this.model.removeItem(id);
            this.view.updateView(this.model.lists);
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
    }

}

const controller = new TaskController(new TaskModel(), new TaskView());

controller.start();

/*
    PLANS

        1. Does your program have a user interface? What will it look like? What functionality will the interface have? Sketch this out on paper.
            - The todo-list application has a user interface, the interface will be a crud application - create, read, update, delete
            - You can type in the project name 
            - delete a project
            - add a todo to a certain project
            - complete the todo
            - display how many todos you have left
            - render different todos based on the project the user selected
            - You can easily remove the compeleted todos from the todo list

        2. What inputs will your program have? Will the user enter data or will you get input from somewhere else?
            - The user will enter data
            - The user can delete the data
            - The user can edit the data

        3. What’s the desired output?
            1. List Component
                - User types in a project in the input field, can press ENTER or + to push their project into the list component
                - User can delete the project from DOM and Logic when clicking on clear list button
                - User can see what project they're currently in when pressing on the project list
                - When user clicks on a different project, it will update the view to show the todos in the project that the user clicked in
            
            2. Todo list Component
                - User can type in a task and push it into the DOM if ENTER is pressed or + button, 
                - User can click on the todo and it will completed or not completed
                - User can see the remaining tasks that are not completed
                - User can clear all the completed todos

        4. Given your inputs, what are the steps necessary to return the desired output?
            - The list component input will be pushed into the business logic and then update view will render the newly created list text
            it will then display the text in the list component

            - The todo list input field will basically do the functionality but the text will be pushed into the project array and update view will render that


    DIVIDE & CONQUER - PROBLEMS
        [ ] List Component
            [*] Grab text from input field form
            [*] Text needs to be in the new Project(text) and pushed into an array that view can render
            [*] multiple projects can be Pushed
            [*] Each project has a unique ID
            [*] HTML structure of list text also has the unique ID that represents the listed projects
            [*] when list text is clicked, it shows the object that correlates to the list
            [*] when list text is clicked, it updates the text on the todo component 
            [*] when list text is clicked, the remaining task will be updated to reflect what the list object has in its object

        [ ] Todo Component
            [ ] Grab text from input field form
            [ ] Text needs to be in new Todo(text) and pushed into the todo array that it's the project
            [ ] Can Render the todos 
            [ ] Can complete the todo and uncomplete the todo
            [ ] can remove all completed todos when clear completed todo button is pressed

        [ ] Validate Inputs
            [ ] 
*/