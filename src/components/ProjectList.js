import React, { useContext, useRef, useEffect, useMemo } from 'react';
import { Project } from './Project';
import { CreateProject } from './CreateProject';
import { ProjectContext, DispatchContext } from '../contexts/project.context';
import { SELECTED_PROJECT_ACTIVE } from '../constants/actions';

const ProjectList = () => {
	const projects = useContext(ProjectContext);
	const dispatch = useContext(DispatchContext);

	const allProjects = useRef();

	useEffect(() => {
		console.log('Debugging: ', projects);

		projects.map((project) => {

			if (project.active) {

				allProjects.current.childNodes.forEach((node) => {

					node.classList.remove('active-list');
					
					if (project.id === node.dataset.projectid) {
						node.classList.add('active-list');
					}

				});

			} 

		});

	}, [projects]);

	const activateProject = (event) => {
		if (event.target.classList.contains('list-name')) {
			
			projects.map((project) => {

				if (project.id === event.target.dataset.projectid) {
					dispatch({
						type: SELECTED_PROJECT_ACTIVE,
						id: project.id,
						isActive: true,
					});
				}

			});
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
				{useMemo(() => {
					return projects.map((project) => {
						return (
							<Project
								key={project.id}
								id={project.id}
								name={project.projectName}
							/>
						);
					});
				}, [projects])}
			</ul>
			<CreateProject />
		</div>
	);
};

export { ProjectList };
