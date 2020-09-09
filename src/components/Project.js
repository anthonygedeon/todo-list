import React from 'react';
import { ProjectContext } from '../contexts/project.context';

const Project = ({ id, name }) => {
	

	return (
		<li key={id} className="list-name">
			{name}
		</li>
	);
};

export { Project };
