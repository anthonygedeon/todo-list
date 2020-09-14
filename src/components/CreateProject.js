import React, { useRef, useContext } from 'react';
import useInputState from '../hooks/useInputState';
import { DispatchContext } from '../contexts/project.context';
import { ADD_PROJECT, SELECTED_PROJECT_ACTIVE, LAST_ACTIVE } from '../constants/actions';

const CreateProject = () => {
	const [value, clearValue, inputChange] = useInputState('');

	const dispatch = useContext(DispatchContext)

	const inputValue = useRef();

	return (
		<form action="">
			<input
				type="text"
				className="new list"
				placeholder="new list name"
				aria-label="new list name"
				onChange={inputChange}
				ref={inputValue}
				value={value}
			/>
			<button
				className="btn create"
				aria-label="create new list"
				onClick={(event) => {
					event.preventDefault();

					if (inputValue.current.value !== '') {

						clearValue();

						dispatch({ type:  SELECTED_PROJECT_ACTIVE, isActive: false });

						dispatch({ type: ADD_PROJECT, projectName: inputValue.current.value });

						dispatch({ type: LAST_ACTIVE });
					}
				}}
			>
				+
			</button>
		</form>
	);
};

export { CreateProject };
