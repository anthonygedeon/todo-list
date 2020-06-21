const log = console.log;

const displayController = (() => {

	const DOM_CLASSNAMES = {

	};

	const taskWrapper = document.querySelector('.task-list');

	function _createProjectItem(element, className, text) {
		const tag = document.createElement(element);
		tag.classList.className = className;
		tag.textContent = text;
		return tag;
	}

	function _removeValueFromInput(...inputs) {
		const reset = '';

		if (inputs.length === 1) {
			document.querySelector(...inputs).value = reset;
		} else {
			document.querySelectorAll(inputs).forEach(input => {
				input.value = reset;
			});
		}

	}

	function addProjectToList() {
		const projectInputField = document.querySelector('.js-project-create');
		const projectAddBtn = document.querySelector('.js-project-add');
		projectAddBtn.addEventListener('click', (event) => {
			event.preventDefault();
			const projectItem = _createProjectItem('li', 'list-item', projectInputField.value);
			taskWrapper.append(projectItem);
			_removeValueFromInput('.js-project-create');
		});
	}

	return {
		addProjectToList
	};

})();

const Todo = (() => {

	let projects = [

		{name: 'YouTube', id: 0, todos: [
			{ name: 'Task 1', id: 0 },
			{ name: 'Task 2', id: 1 },
			{ name: 'Task 3', id: 2 },
			{ name: 'Task 4', id: 3 },
		]},
	
		{name: 'Work', id: 1, todos: [
			{ name: 'Task 1', id: 0 },
			{ name: 'Task 2', id: 1 },
			{ name: 'Task 3', id: 2 },
			{ name: 'Task 4', id: 3 },
		]},
	
		{name: 'Grocery', id: 2, todos: [
			{ name: 'Task 1', id: 0 },
			{ name: 'Task 2', id: 1 },
			{ name: 'Task 3', id: 2 },
			{ name: 'Task 4', id: 3 },
		]},

	];

	class Project {

		constructor(name) {
			this.name = name;
			this.id =
				projects.length > 0
					? projects[projects.length - 1].id + 1
					: 0;
			this.todos = [];
		}

		add(project) {
			projects.push(project);
		}

		remove(id) {
			projects.splice(id, 1);
		}

	}

	displayController.addProjectToList();

	return {

	};
	
})();