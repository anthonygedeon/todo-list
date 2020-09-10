import React, { useContext, useRef, useEffect } from 'react';
import { Project } from './Project';
import { CreateProject } from './CreateProject';
import { ProjectContext, DispatchContext } from '../contexts/project.context';
import { PROJECT_ACTIVE } from '../constants/actions';

const ProjectList = () => {
	const projects = useContext(ProjectContext);
	const dispatch = useContext(DispatchContext);

	const allProjects = useRef();

	useEffect(() => {
		
		projects[0].active = true;

	}, [])

	const activateProject = (event) => {
		if (event.target.classList.contains('list-name')) {
			// remove all
			allProjects.current.childNodes.forEach((node) => {
				if (node.classList.contains('active-list')) {
					node.classList.remove('active-list');
					dispatch({ type: PROJECT_ACTIVE, isActive: false });
				}
			});

			// project was clicked
			event.target.classList.add('active-list');

			projects.map((project) => {
				if (project.id === event.target.dataset.projectid) {
					dispatch({
						type: PROJECT_ACTIVE,
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
				{projects.map((project) => {
					return (
						<Project
							key={project.id}
							id={project.id}
							name={project.projectName}
						/>
					);
				})}
			</ul>
			<CreateProject />
		</div>
	);
};

export { ProjectList };
