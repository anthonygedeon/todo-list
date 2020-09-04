import React from 'react';
import { ProjectProvider } from '../providers/ProjectProvider';
import { ProjectList } from './ProjectList';
import { CurrentTask } from './CurrentTask';
import { CreateTask } from './CreateTask';
import { Tasks } from './Tasks';
import { Delete } from './Delete';

function App() {
	return (
		<>
			<h1 className="title">Stuff I need to do</h1>

			<ProjectProvider>
				<ProjectList />

				<div className="todo-list">
					<CurrentTask />

					<div className="todo-body">
						<Tasks />

						<CreateTask />

						<Delete />
					</div>
				</div>
			</ProjectProvider>
		</>
	);
}

export default App;
