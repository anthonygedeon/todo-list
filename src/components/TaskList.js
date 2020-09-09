import React, { useContext } from 'react';
import { Task } from './Task';
import { ProjectContext } from '../contexts/project.context';

const TaskList = () => {
	const projects = useContext(ProjectContext);

	return (
		<div className="tasks">
			{projects.map((project) =>
				project.tasks.map((task) => (
					<Task
						key={task.id}
						id={task.id}
						taskName={task.taskName}
						completed={task.completed}
					/>
				))
			)}
		</div>
	);
};

export { TaskList };
