import React, { useContext } from 'react';
import { DispatchContext } from '../contexts/project.context';
import { PROJECT_ACTIVE } from '../constants/actions';

const Project = ({ id, name }) => {

	const dispatch = useContext(DispatchContext);

	const displayTaskList = () => {
		dispatch({ type: PROJECT_ACTIVE,  })
	}
	
	return (
		<li key={id} className="list-name" onClick={displayTaskList}>
			{name}
		</li>
	);
};

export { Project };
