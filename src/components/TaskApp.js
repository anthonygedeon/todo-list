import React from 'react';
import { CurrentTask } from './CurrentTask';
import { CreateTask } from './CreateTask';
import { TaskList } from './TaskList';
import { Delete } from './Delete';

const TaskApp = () => {
	return (
		<div className="todo-list">
			<CurrentTask />

			<div className="todo-body">
				<TaskList />

				<CreateTask />

				<Delete />
			</div>
		</div>
	);
};

export { TaskApp };
