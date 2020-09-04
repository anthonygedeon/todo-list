import React from 'react';
import { ProjectProvider } from '../contexts/project.context';
import { ProjectList } from './ProjectList';
import { TaskApp } from './TaskApp';

function App() {
	return (
		<>
			<h1 className="title">Stuff I need to do</h1>

			<ProjectProvider>
				<ProjectList />
				<TaskApp />
			</ProjectProvider>
		</>
	);
}

export default App;
