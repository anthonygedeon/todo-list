import React from 'react';
import { Task } from './Task';

const Tasks = () => {
	return (
		<div className="tasks">
			<Task id={0} todo="Workout"/>

			<Task id={1} todo="Study for medical exam"/>

			<Task id={2} todo="Get Groceries"/>
		</div>
	);
};

export { Tasks };
