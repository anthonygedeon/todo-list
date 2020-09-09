import React from 'react';

const Task = ({ id, taskName, completed }) => {
	return (
        <div className="task" >
            <input type="checkbox" key={id} id={`task-${id}`}/>
            <label htmlFor={`task-${id}`}>
                <span className="custom-checkbox"></span>
                {taskName}
            </label>
        </div>
	);
};

export { Task };
