const todos = (state=[], action) => {
	console.log(state);
	switch(action.type) {
		case "ADD_TODO":
			let todos = [...state];
			todos = [...todos, action.todo];
			return todos;
		default:
			return state;
	}
}

export default todos;