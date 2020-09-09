import React, { createContext, useReducer } from 'react';
import reducer from '../reducers/projects.reducer';
import uuid from 'react-uuid';

const defaultProjects = [
	{
		projectName: 'Grocies List',
        id: uuid(),
		tasks: [
			{
				id: uuid(),
				taskName: 'Milk',
				completed: true,
			},
			{
				id: uuid(),
				taskName: 'Eggs',
				completed: false,
			},
		],
	},
];

export const ProjectContext = createContext();
export const DispatchContext = createContext();

const ProjectProvider = (props) => {
    const [projects, dispatch] = useReducer(reducer, defaultProjects);
    
    console.log(projects);

	return (
		<ProjectContext.Provider value={projects}>
			<DispatchContext.Provider value={dispatch}>
				{props.children}
			</DispatchContext.Provider>
		</ProjectContext.Provider>
	);
};

export { ProjectProvider };
