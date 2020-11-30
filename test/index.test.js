const { chromium } = require('playwright');
const expect = require('expect');

let browser;
let page;

beforeAll(async () => {
	browser = await chromium.launch({ headless: true });
});

beforeEach(async () => {
	page = await browser.newPage();

	await page.goto('http://localhost:3000');
});

afterEach(async () => {
	await page.close();
});

afterAll(async () => {
	await browser.close();
});

describe('Projects', () => {
	it('Should create a new project item', async () => {
		const projectTitle = 'Project 1';

		await page.fill(
			'[data-test-id="js-create-project-input"]',
			projectTitle
		);

		await page.click('[data-test-id="js-create-project-btn"]');

		let projectListHandle = await page.$('.task-list');

		const projectItem = await projectListHandle.$$eval(
			'.list-name',
			(nodes) => nodes.map((node) => node.innerText)
		);

		console.log(projectItem);

		expect(projectItem).toEqual([projectTitle]);
	});

	it('Should create multiple projects', async () => {
		const projectTitles = [
			'Project 1',
			'Project 2',
			'Project 3',
			'Project 4',
			'Project 5',
		];

		for (let project of projectTitles) {
			await page.fill(
				'[data-test-id="js-create-project-input"]',
				project
			);

			await page.click('[data-test-id="js-create-project-btn"]');
		}

		let projectListHandle = await page.$('.task-list');

		const projectItem = await projectListHandle.$$eval(
			'.list-name',
			(nodes) => nodes.map((node) => node.innerText)
		);

		console.log(projectItem);

		expect(projectItem).toEqual(projectTitles);
	});

	it('Should delete a project', async () => {
		const projectTitle = 'Project 1';

		await page.fill(
			'[data-test-id="js-create-project-input"]',
			projectTitle
		);

		await page.click('[data-test-id="js-create-project-btn"]');

		let projectListHandle = await page.$('.task-list');

		await page.click('[data-test-id="js-delete-project"]');

		const projects = await projectListHandle.$$('.list-name');

		expect(projects.length).toEqual(0);
	});

	it('Sshould delete multiple projects', async () => {
		const projectTitles = [
			'Project 1',
			'Project 2',
			'Project 3',
			'Project 4',
			'Project 5',
		];

		for (let project of projectTitles) {
			await page.fill(
				'[data-test-id="js-create-project-input"]',
				project
			);

			await page.click('[data-test-id="js-create-project-btn"]');
		}

		for (let project of projectTitles) {
			await page.click('[data-test-id="js-delete-project"]');
		}

		let projectListHandle = await page.$('.task-list');

		const projects = await projectListHandle.$$('.list-name');

		expect(projects.length).toEqual(0);
	});

	it('Should delete a specific project', async () => {
		const projectTitles = [
			'Project 1',
			'Project 2',
			'Project 3',
			'Project 4',
			'Project 5',
		];

		const projectToDelete = projectTitles[0];

		for (let project of projectTitles) {
			await page.fill(
				'[data-test-id="js-create-project-input"]',
				project
			);

			await page.click('[data-test-id="js-create-project-btn"]');
		}

		await page.click(`css=.task-list >> text=${projectToDelete}`);

		await page.click('[data-test-id="js-delete-project"]');

		let projectListHandle = await page.$('.task-list');

		const projects = await projectListHandle.$$eval('.list-name', (nodes) =>
			nodes.map((node) => node.innerText)
		);

		const arrayDifference = (array1, array2) => {
			const list = array1.concat(array2);

			return list.filter((element) => {
				if (!(array1.includes(element) && array2.includes(element))) {
					return element;
				}
			});
		};

		const uniqueArray = arrayDifference(projectTitles, projects);

		expect(uniqueArray[0]).toEqual(projectToDelete);
	});

	it('Should be only 1 project active when clicked', async () => {
		const projectTitles = [
			'Project 1',
			'Project 2',
			'Project 3',
			'Project 4',
			'Project 5',
		];

		for (let project of projectTitles) {
			await page.fill(
				'[data-test-id="js-create-project-input"]',
				project
			);

			await page.click('[data-test-id="js-create-project-btn"]');
		}

		await page.click('.list-name:nth-child(3)');

		let projectListHandle = await page.$('.task-list');

		const projects = await projectListHandle.$$eval('.list-name', (nodes) =>
			nodes.map((node) => node.className)
		);

		const activeProject = projects.filter((project) =>
			project.includes('active-list')
		);

		expect(activeProject.length).toEqual(1);
	});

	it('Should render correct project name on task list', async () => {

        const projectTitle = 'Project 1';

		await page.fill(
			'[data-test-id="js-create-project-input"]',
			projectTitle
		);

		await page.click('[data-test-id="js-create-project-btn"]');

        let projectListHandle = await page.$('.task-list');
        let taskHeaderHandle = await page.$(`.todo-header`);

		const projectItem = await projectListHandle.$$eval(
			'.list-name',
			(nodes) => nodes.map((node) => node.innerText)
        );

        const taskTitle = await taskHeaderHandle.$eval('.list-title', node => node.innerText)

        expect(taskTitle).toBe(projectItem[0]);

    });
});

/* How I would test the Task list */
describe('Tasks', () => {
	xit('Should create task', async () => {});
	xit('Should complete a task', async () => {});
	xit('Should remove a completed task', async () => {});
	xit('Should complete multiple tasks', async () => {});
	xit('Should remove multiple tasks', async () => {});
	xit('Should toggle completeness for a task', async () => {});
	xit('Should show same tasks when clicking on a project', async () => {});
});
