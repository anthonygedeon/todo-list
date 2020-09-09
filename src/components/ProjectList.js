import React, { useState, useContext, useRef } from 'react';
import { Project } from './Project';
import { CreateProject } from './CreateProject';
import { ProjectContext } from '../contexts/project.context';

const ProjectList = () => {
	const projects = useContext(ProjectContext);

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
		<div className="all-tasks">
			<h2 className="task-list-title">My lists</h2>
			<ul
				className="task-list"
				ref={allProjects}
				onClick={activateProject}
			>
				{projects.map((project) => {
					return (
						<Project id={project.id} name={project.projectName} />
					);
				})}
			</ul>
			<CreateProject />
		</div>
	);
};

export { ProjectList };
