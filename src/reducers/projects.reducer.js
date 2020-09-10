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

		case PROJECT_ACTIVE:
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
            })

            return [...state];

		case REMOVE_TASK:            
			return;

		case TOGGLE_TASK:

            activeProject[0].tasks.map((task) => {

                if (task.id === action.id) {
                    console.log(task)
                    return task.completed = !task.completed;
                }

            });

			return [...state];

		default:
			return state;
	}
};

export default reducer;
