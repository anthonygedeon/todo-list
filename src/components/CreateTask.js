import React, { useRef, useContext } from 'react';
import useInputState from '../hooks/useInputState';
import { ProjectContext, DispatchContext } from '../contexts/project.context';
import { ADD_TASK } from '../constants/actions';

const CreateTask = () => {
	
	const projects = useContext(ProjectContext);
	const dispatch = useContext(DispatchContext);

	const [value, clearValue, inputChange] = useInputState('');

	const addTask = useRef();

	if (projects.length === 0) {
		return (
			<div className="new-task-creator">
				<h2>No Tasks</h2>
			</div>
		);
	} else {
		return (
			<div className="new-task-creator">
				<form action="">
					<input
						type="text"
						className="new task"
						placeholder="new task name"
						aria-label="new task name"
						onChange={inputChange}
						value={value}
					/>
					<button className="btn create" aria-label="create new task" onClick={(event) => {
						
						event.preventDefault();

						clearValue();

						dispatch({ type: ADD_TASK, taskName: value })

					}}>
						+
					</button>
				</form>
			</div>
		);
	}
};

export { CreateTask };
