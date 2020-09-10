import React from 'react';

const Project = ({ id, name }) => {
	return (
		<li key={id} className="list-name" data-projectid={id}>
			{name}
		</li>
	);
};

export { Project };
