import * as actions from '../Actions/actionCreators';

describe('actions', () => {
	it('should create an action to add a todo', () => {
		const todo = "Hello World";
		const expectedAction = {
			type: "ADD_TODO",
			todo
		};

		expect(actions.addTodo(todo)).toEqual(expectedAction);
	});
});