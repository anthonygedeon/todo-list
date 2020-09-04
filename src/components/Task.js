import React from 'react';

const Task = (props) => {
	return (
        <div className="task">
            <input type="checkbox" id={`task-${props.id}`} />
            <label for="task-1">
                <span className="custom-checkbox"></span>
                {props.todo}
            </label>
        </div>
	);
};

export { Task };
