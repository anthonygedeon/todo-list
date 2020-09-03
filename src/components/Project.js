import React, { useState, useRef } from 'react';

const Project = () => {
	const [projects, setProject] = useState([
		{
			projectName: 'YouTube',
			id: 0,
		},
		{
			projectName: 'Work',
			id: 1,
		},
		{
			projectName: 'Grocery',
			id: 2,
		},
    ]);
    

    const allProjects = useRef();

    const activateProject = (event) => {

        if (event.target.classList.contains('list-name')) {
            
            // remove all 
            allProjects.current.childNodes.forEach(node => node.classList.remove('active-list'));

            // project was clicked
            event.target.classList.add('active-list');

        }

    }

	return (
		<ul className="task-list"  ref={allProjects} onClick={activateProject}>
			{projects.map((project) => (
                <li 
                    key={project.id} 
                    className="list-name"
                    >
					{project.projectName}
				</li>
			))}
			{/* <li className="list-name active-list">Youtube</li>*/}
		</ul>
	);
};

export { Project };
