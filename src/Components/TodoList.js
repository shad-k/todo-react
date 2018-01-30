import React, { Component, PropTypes } from 'react';

class TodoList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul className="todo-list">
            	{this.props.todoList.map((todo, index) => {
            		return (
            			<li key={index} className="todo-item">
            				{todo}
            			</li>
            		);
            	})}
            </ul>
        );
    }
}

export default TodoList;
