import React, { createContext, useReducer } from 'react';
import reducer from '../reducers/projects.reducer';

const defaultProjects = [];

export const ProjectContext = createContext();
export const DispatchContext = createContext();

const ProjectProvider = (props) => {
    const [projects, dispatch] = useReducer(reducer, defaultProjects);
    
	return (
		<ProjectContext.Provider value={projects}>
			<DispatchContext.Provider value={dispatch}>
				{props.children}
			</DispatchContext.Provider>
		</ProjectContext.Provider>
	);
};

export { ProjectProvider };
