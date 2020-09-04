import React, { createContext, useState } from 'react';

const ProjectContext = createContext();

const ProjectProvider = (props) => {

    const [project, setProject] = useState([
		{
			projectName: 'YouTube',
            id: 0,
            tasks: [
                {
                    id: 0,
                    taskName: 'edit video',
                    completed: true
                },
                {
                    id: 1,
                    taskName: 'publish',
                    completed: false
                }
            ]
		},
		{
			projectName: 'Work',
            id: 1,
            tasks: [
                {
                    id: 0,
                    taskName: 'Contact boss',
                    completed: false
                }
            ]
		},
		{
			projectName: 'Grocery',
            id: 2,
            tasks: [
                {
                    id: 0,
                    taskName: 'Milk',
                    completed: false
                },
                {
                    id: 1,
                    taskName: 'Fruit loops',
                    completed: false
                },
                {
                    id: 2,
                    taskName: 'Yogurt',
                    completed: false
                }
            ]
		},
    ]);
    
    return (
        <ProjectContext.Provider value={{
            projects: project,
            addProject(projectName) {

                setProject(prevState => [...prevState, {
                    id: 3,
                    projectName,
                    tasks: [],
                }])
            },
            addTask() {

            },
            deleteProject() {

            },
            deleteTask() {

            }
        }}>
            {props.children}
        </ProjectContext.Provider>
    );

};

export { ProjectProvider, ProjectContext }
