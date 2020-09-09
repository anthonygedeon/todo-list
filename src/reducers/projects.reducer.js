import {
	ADD_PROJECT,
	REMOVE_PROJECT,
	ADD_TASK,
	REMOVE_TASK,
	TOGGLE_TASK,
} from '../constants/actions';
import uuid from 'react-uuid';

const reducer = (state, action) => {
	switch (action) {
		case ADD_PROJECT:
			return;

		case REMOVE_PROJECT:
			return;

		case ADD_TASK:
			return;

		case REMOVE_TASK:
			return;

		case TOGGLE_TASK:
			return;
	}
};

export default reducer;
