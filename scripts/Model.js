const Model = (() => {

	class Project {

		constructor() {

			this.projects = [

				// { name: 'YouTube', id: 0, todos: [
				// 	{ name: 'Task 1', id: 0, complete: false },
				// 	{ name: 'Task 2', id: 1, complete: false },
				// 	{ name: 'Task 3', id: 2, complete: false },
				// 	{ name: 'Task 4', id: 3, complete: false },
				// ]},
			
				// { name: 'Work', id: 1, todos: [
				// 	{ name: 'Task 1', id: 0, complete: false },
				// 	{ name: 'Task 2', id: 1, complete: false },
				// 	{ name: 'Task 3', id: 2, complete: false },
				// 	{ name: 'Task 4', id: 3, complete: false },
				// ]},
			
				// { name: 'Grocery', id: 2, todos: [
				// 	{ name: 'Task 1', id: 0, complete: false },
				// 	{ name: 'Task 2', id: 1, complete: false },
				// 	{ name: 'Task 3', id: 2, complete: false },
				// 	{ name: 'Task 4', id: 3, complete: false },
				// ]},
		
			];
		}

		addProject(text) {
			const project = {
				name: text,
				todos: [],
				id: this.projects.length > 0 ? this.projects[this.projects.length - 1].id + 1 : 0,
			}

			this.projects.push(project);
		}

		addTodo(text) {
			const todo = {
				name: text,
				id: this.projects.length > 0 ? this.projects[this.projects.length - 1].id + 1 : 0
			}
		}

		getProjectTitle(id) {
			return this.projects[id].name;
		}

		removeProject(id) {
			return this.projects.splice(id, 1);
		}

		toggleTodoCompleteness(id, idOfTodo) {
			const isTodoComplete = this.projects[id].todos[idOfTodo].complete;
			return isTodoComplete == false ? !isTodoComplete : false;
		}

		totalTodos(id) {
			//return this.projects[id].todos.filter(todo => todo != false).length;
			return this.projects[id].todos.length;
		}

	}

	return {
		project: new Project(),
	};
	
})();

export default Model;