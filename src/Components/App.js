import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../Actions/actionCreators';
import { bindActionCreators } from 'redux';

import TodoForm from './TodoForm';
import TodoList from './TodoList';

import '../Styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
      	<TodoForm addTodo={this.props.addTodo} />
      	{this.props.todos.length !== 0 &&
      		<TodoList todoList={this.props.todos} />
      	}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
	return {
		todos: state.todos
	};
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
