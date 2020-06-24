class TaskModel {
    
    constructor() {
        this.lists = [
            // { name: 'Task 1', id: 0, todos: [] },
            // { name: 'Task 2', id: 1, todos: [] },
            // { name: 'Task 3', id: 2, todos: [] }
        ];
    }

    addItem(text) {
        const project = {
            name: text,
            todos: [],
            id: this.lists > 0 ? this.lists[this.lists.length - 1].id + 1: 0,
        }

        return this.lists.push(project);
    }

    removeItem(id) {
        return this.lists.splice(id, 1);
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

    buildList(lists) {   
        const listComponents = lists.map(list => `<li class="list-name">${list.name}</li>`);
        console.log(listComponents);
        return listComponents;
    }

    updateView(lists) {
        

        lists.forEach(list => {
            this.listWrapper.append(this.buildList(list))
        });

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
        })
    }

}

const controller = new TaskController(new TaskModel(), new TaskView());

controller.addListHandler();

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
            [ ] Grab text from input field form
            [ ] Text needs to be in the new Project(text) and pushed into an array that view can render
            [ ] multiple projects can be Pushed
            [ ] Each project has a unique ID
            [ ] HTML structure of list text also has the unique ID that represents the listed projects
            [ ] when list text is clicked, it shows the object that correlates to the list
            [ ] when list text is clicked, it updates the text on the todo component 
            [ ] when list text is clicked, the remaining task will be updated to reflect what the list object has in its object

        [ ] Todo Component
            [ ] Grab text from input field form
            [ ] Text needs to be in new Todo(text) and pushed into the todo array that it's the project
            [ ] Can Render the todos 
            [ ] Can complete the todo and uncomplete the todo
            [ ] can remove all completed todos when clear completed todo button is pressed

        [ ] Validate Inputs
            [ ] 
*/