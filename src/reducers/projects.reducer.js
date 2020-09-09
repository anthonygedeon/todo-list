import {
	ADD_PROJECT,
	REMOVE_PROJECT,
	ADD_TASK,
	REMOVE_TASK,
	TOGGLE_TASK,
	PROJECT_ACTIVE,
} from '../constants/actions';
import uuid from 'react-uuid';

const reducer = (state, action) => {
	switch (action.type) {
		case ADD_PROJECT:
			return [
				...state,
				{
					id: uuid(),
					projectName: action.projectName || '',
					tasks: [],
				},
			];

		case PROJECT_ACTIVE:
			return state.map((project) => {
				return {
					...project,
				};
			});

		case REMOVE_PROJECT:
			return state.filter((project) => project.id !== action.id);

		case ADD_TASK:
			return;

		case REMOVE_TASK:
			return;

		case TOGGLE_TASK:
			return;

		default:
			return state;
	}
};

export default reducer;
