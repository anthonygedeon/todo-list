import React, { useState, useRef } from 'react';
import { ProjectContext } from '../providers/ProjectProvider';

const Project = () => {
	const allProjects = useRef();

	const activateProject = (event) => {
		if (event.target.classList.contains('list-name')) {
			// remove all
			allProjects.current.childNodes.forEach((node) =>
				node.classList.remove('active-list')
			);

			// project was clicked
			event.target.classList.add('active-list');
		}
	};

	return (
		<ul className="task-list" ref={allProjects} onClick={activateProject}>
			<ProjectContext.Consumer>
				{(context) => {
					return context.projects.map((project) => (
						<li key={project.id} className="list-name">
							{project.projectName}
						</li>
					));
				}}
			</ProjectContext.Consumer>
		</ul>
	);
};

export { Project };
