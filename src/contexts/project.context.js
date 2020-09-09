import React, { createContext, useReducer } from 'react';
import reducer from '../reducers/projects.reducer';
import uuid from 'react-uuid';

const defaultProjects = [
	{
		projectName: 'Groceries list',
        id: uuid(),
        active: false,
		tasks: [
			{
				id: uuid(),
				taskName: 'Milk',
				completed: false,
			},
			{
				id: uuid(),
				taskName: 'Eggs',
				completed: false,
			},
		],
    },
    {
		projectName: 'Side Projects',
        id: uuid(),
        active: false,
		tasks: [
			{
				id: uuid(),
				taskName: 'Pomodoro Desktop',
				completed: false,
			},
			{
				id: uuid(),
				taskName: 'Budget App',
				completed: true,
			},
		],
    },
    {
		projectName: 'YouTube content',
        id: uuid(),
        active: false,
		tasks: [
			{
				id: uuid(),
				taskName: 'Edit video',
				completed: true,
			},
			{
				id: uuid(),
				taskName: 'Publish video',
				completed: true,
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
