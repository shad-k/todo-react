import React, { Component } from 'react';

class TodoForm extends Component {
    constructor(props) {
        super(props);

        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(e) {
    	e.preventDefault();
    	const todo = this.todo.value;
    	this.props.addTodo(todo);
    	this.addForm.reset(0);
    }

    render() {
        return (
        	<form ref={(input) => this.addForm = input} className="add-todo-form">
	        	<input ref={(input) => this.todo = input} type="text" className="add-todo-input" />
	        	<button className="add-todo-button" onClick={this.clickHandler}>Add Todo</button>
        	</form>
        );
    }
}

export default TodoForm;
