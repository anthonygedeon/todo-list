import React, { useRef } from 'react';
import { ProjectContext } from '../providers/ProjectProvider';

const CreateProject = () => {
	const inputValue = useRef();

	const getProjectName = () => {

		return inputValue.current.value

	};

	return (
		<ProjectContext.Consumer>
			{(context) => {

				

				return (<form action="">
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
							event.preventDefault()

							const projectName = getProjectName();

							context.addProject(projectName)

						}}
					>
						+
					</button>
				</form>);
			}}
		</ProjectContext.Consumer>
	);
};

export { CreateProject };
