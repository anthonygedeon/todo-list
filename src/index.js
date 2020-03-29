const Model = (() => {

	class TodoList {
		constructor() {
			this.todos = [];
		}

		static generateId() {
			return this.todos.length > 0
				? this.todos[this.todos.length - 1].id + 1
				: 0;
		}
		
		addTodo(date, isCompleted, content, categoryList, note) {
			const todo = {
				id: this.generateId(),
				date: date,
				isCompleted: isCompleted,
				content: content,
				categoryList: categoryList,
				note: note
			}

			this.todos.push(todo)
		}

		editTodo(id) {
			
		}

		deleteTodo(id) {

		}
	}


	return {
		TodoList
	};
})();

const View = (() => {
	return {

	};
})();

const Controller = ((model, view) => {

	return {

	}
})(Model, View);
