import React, { useState } from 'react';
import { Project } from './Project';
import { CreateProject } from './CreateProject';

const ProjectList = () => {
	return (
		<div className="all-tasks">
			<h2 className="task-list-title">My lists</h2>
            <Project />
			<CreateProject />
		</div>
	);
};

export { ProjectList };
