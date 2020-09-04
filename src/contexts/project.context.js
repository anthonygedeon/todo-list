import React, { createContext, useReducer } from 'react';
import projectReducer from '../reducers/projects.reducer';
import uuid from 'react-uuid';

const defaultProjects = [
    {
        projectName: 'YouTube',
        id: uuid(),
        tasks: [
            {
                id: uuid(),
                taskName: 'edit video',
                completed: true
            },
            {
                id: uuid(),
                taskName: 'publish',
                completed: false
            }
        ]
    },
    {
        projectName: 'Work',
        id: uuid(),
        tasks: [
            {
                id: uuid(),
                taskName: 'Contact boss',
                completed: false
            }
        ]
    },
]

const ProjectContext = createContext();

const ProjectProvider = (props) => {

    const [projects] = useReducer(projectReducer, defaultProjects);

    console.log(projects)

    return (
        <ProjectContext.Provider value={projects}>
            {props.children}
        </ProjectContext.Provider>
    );

};

export { ProjectProvider, ProjectContext }
