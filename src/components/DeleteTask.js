import React, { useContext } from 'react';
import { REMOVE_TASK } from "../constants/actions";
import { DispatchContext } from "../contexts/project.context";

const DeleteTask = () => {

	const dispatch = useContext(DispatchContext);

	return (
		<button onClick={() => {

			dispatch({ type: REMOVE_TASK })

		}} className="btn delete">Clear completed tasks</button>
	);
};

export { DeleteTask };
