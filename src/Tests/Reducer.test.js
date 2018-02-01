import todos from '../Reducers/todos';

describe("todos", () => {
	it("should return the initial state", () => {
		expect(todos(undefined, [])).toEqual([]);
	});

	it("should react to an action ADD_TODO", () => {
		const todo = "Hello world";
		expect(todos(undefined, {
			type: "ADD_TODO",
			todo
		})).toEqual([todo])
	});
});