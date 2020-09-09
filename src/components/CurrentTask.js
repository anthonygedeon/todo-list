import React, { useContext } from 'react';
import { ProjectContext } from '../contexts/project.context';

const CurrentTask = () => {
	const projects = useContext(ProjectContext);

	return (
		<div className="todo-header">
			{projects.map((project) => {
				if (project.active) {
					return (
						<>
							<h2 className="list-title">
								{project.projectName}
							</h2>
							<p className="task-count">
								{project.tasks.length} tasks remaining
							</p>
						</>
					);
				}
			})}
		</div>
	);
};

export { CurrentTask };
