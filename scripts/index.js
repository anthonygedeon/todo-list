import Model from './Model.js';
import View from './View.js';

const Controller = ((model, view) => {

	document.querySelector('.js-project-add').addEventListener('click', (event) => {
		event.preventDefault();
		model.project.addProject(view.ui.projectInputField.value);
		view.ui.appendProjectComponent();
		view.ui._removeTextFromInput('.js-project-create');
	});

	document.querySelector('.task-list').addEventListener('click', (event) => {
		if (event.target.matches('.list-name')) {
			view.ui.displayTitle(event.target.textContent);
		}
	});

	document.querySelector('.js-btn-clear').addEventListener('click', (event) => {

	});

	return {

	};

})(Model, View);
