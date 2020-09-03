import React, { useState, useRefs } from 'react';
import { Project } from './Project';

const ProjectList = () => {
	return (
		<div className="all-tasks">
			<h2 className="task-list-title">My lists</h2>
			
            <Project />

			<form action="">
				<input
					type="text"
					className="new list"
					placeholder="new list name"
					aria-label="new list name"
				/>
				<button className="btn create" aria-label="create new list">
					+
				</button>
			</form>
		</div>
	);
};

export { ProjectList };
