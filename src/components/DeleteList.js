import React, { useContext } from 'react';
import { DispatchContext } from '../contexts/project.context';
import { REMOVE_PROJECT } from '../constants/actions';

const DeleteList = () => {
	const dispatch = useContext(DispatchContext);

	return (
		<button
			className="btn delete"
			onClick={() => {
				dispatch({ type: REMOVE_PROJECT });
				dispatch({ type: 'LAST_ACTIVE' })
			}}
		>
			Delete list
		</button>
	);
};

export { DeleteList };
