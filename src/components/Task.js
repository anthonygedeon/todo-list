import React, { useContext } from 'react';
import { TOGGLE_TASK } from '../constants/actions';
import { DispatchContext } from '../contexts/project.context';

const Task = ({ id, taskName, completed }) => {

    const dispatch = useContext(DispatchContext);


    const handleCompleteTask = () => {

        dispatch({ type: TOGGLE_TASK, id });

    }

	return (
        <div className="task" onClick={handleCompleteTask}>
            <input type="checkbox" key={id} id={`task-${id}`}/>
            <label htmlFor={`task-${id}`}>
                <span className="custom-checkbox"></span>
                {taskName}
            </label>
        </div>
	);
};

export { Task };
