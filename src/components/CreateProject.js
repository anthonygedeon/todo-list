import React, { useRef, useEffect } from 'react';
import useInputState from '../hooks/useInputState';
import { ProjectContext } from '../contexts/project.context';

const CreateProject = () => {

	const [value, clearValue] = useInputState('')
	
	const inputValue = useRef();

	const getProjectName = () => {
		return inputValue.current.value;
	};

	return (
		<ProjectContext.Consumer>
			{(context) => {
				return (
					<form action="">
						<input
							type="text"
							className="new list"
							placeholder="new list name"
							aria-label="new list name"
							ref={inputValue}
						/>
						<button
							className="btn create"
							aria-label="create new list"
							onClick={(event) => {
								event.preventDefault();

								if (inputValue.current.value !== '') {
									const projectName = getProjectName();

									context.addProject(projectName);

									clearValue();

									console.log(context.projects);
								}
							}}
						>
							+
						</button>
					</form>
				);
			}}
		</ProjectContext.Consumer>
	);
};

export { CreateProject };
