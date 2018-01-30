import React, { Component } from 'react';

class TodoForm extends Component {
    constructor(props) {
        super(props);

        this.submitHandler = this.submitHandler.bind(this);
    }

    submitHandler(e) {
    	e.preventDefault();
    	const todo = this.todo.value;
    	this.props.addTodo(todo);
    	this.addForm.reset(0);
    }

    render() {
        return (
        	<form ref={(input) => this.addForm = input} onSubmit={this.submitHandler} className="add-todo-form">
	        	<input ref={(input) => this.todo = input} type="text" className="add-todo-input" />
	        	<button className="add-todo-button">Add Todo</button>
        	</form>
        );
    }
}

export default TodoForm;
