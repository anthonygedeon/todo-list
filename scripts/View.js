const View = (() => {

	class UI {

		constructor() {
			// Project
			this.projectWrapper = document.querySelector('.task-list');
			this.projectElement = document.createElement('li');
			this.projectClass = 'list-name';
			this.projectInputField = document.querySelector('.js-project-create');

			// Todo
			this.todoTitle = document.querySelector('.list-title');
			this.todoRemaining = document.querySelector('.task-count');

		}

		displayTitle(text) {
			this.todoTitle.textContent = text;
		}

		displayRemainingTodos(total) {
			this.todoRemaining = total;
		}

		_removeTextFromInput(input) {
			document.querySelector(input).value = '';
		}

		_createProjectComponent() {
			let project = this.projectElement;
			project.classList.add(this.projectClass);
			project.textContent = this.projectInputField.value;
			return project;
		}

		appendProjectComponent() {
			this.projectWrapper.insertAdjacentElement('beforeend', this._createProjectComponent());
		}

		updateView() {
			

		}

	}
	
	return {
		ui: new UI(),
	};

})();

export default View;