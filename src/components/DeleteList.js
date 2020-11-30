import React, { useContext } from 'react';
import { DispatchContext } from '../contexts/project.context';
import { REMOVE_PROJECT, LAST_ACTIVE } from '../constants/actions';

const DeleteList = () => {
	const dispatch = useContext(DispatchContext);

	return (
		<button
            className="btn delete"
            data-test-id="js-delete-project"
			onClick={() => {
				dispatch({ type: REMOVE_PROJECT });
				dispatch({ type: LAST_ACTIVE })
			}}
		>
			Delete list
		</button>
	);
};

export { DeleteList };
