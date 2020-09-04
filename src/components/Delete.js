import React from 'react';
import { DeleteTask } from './DeleteTask';
import { DeleteList } from './DeleteList';

const Delete = () => {
	return (
		<div className="delete-stuff">
            <DeleteTask />
            <DeleteList />
		</div>
	);
};

export { Delete };
