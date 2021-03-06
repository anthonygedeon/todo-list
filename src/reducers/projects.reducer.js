import {
	ADD_PROJECT,
	REMOVE_PROJECT,
	ADD_TASK,
	REMOVE_TASK,
	TOGGLE_TASK,
	SELECTED_PROJECT_ACTIVE,
	LAST_ACTIVE
} from '../constants/actions';
import uuid from 'react-uuid';

const reducer = (state, action) => {
	const activeProject = state.filter((project) => project.active !== false);

	switch (action.type) {
		case ADD_PROJECT:
			return [
				...state,
				{
					id: uuid(),
					active: false,
					projectName: action.projectName || '',
					tasks: [],
				},
			];

		case LAST_ACTIVE:

			return state.map((project, index) => {

				if (state.length - 1 === index) {
					return {
						...project,
						active: true
					}
				} else {
					return { ...project };
				}

			});

		case SELECTED_PROJECT_ACTIVE:
			return state.map((project) => {
				return {
					...project,
					active: project.id === action.id,
				};
			});

		case REMOVE_PROJECT:
			return state.filter((project) => project.active === false);

		case ADD_TASK:
			activeProject[0].tasks.push({
				id: uuid(),
				taskName: action.taskName || '',
				completed: false,
			});

			return [...state];

		case REMOVE_TASK:
			return state.map((project) => {
				if (project.active) {
					return {
						...project,
						tasks: project.tasks.filter((task) => !task.completed),
					};
				} else {
					return { ...project };
				}
			});

		case TOGGLE_TASK:
			return state.map((project) => {
				return {
					...project,
					tasks: project.tasks
						.map((task) =>
							task.id === action.id
								? { ...task, completed: !task.completed }
								: { ...task }
						)
				};
			});

		default:
			return state;
	}
};

export default reducer;
