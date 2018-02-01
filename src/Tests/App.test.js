//https://academy.plot.ly/react/6-testing/
import React from 'react';
import renderer from 'react-test-renderer';
import { App } from '../Components/App';
import TodoForm from '../Components/TodoForm';
import TodoList from '../Components/TodoList';

describe("components", () => {
	describe("<App />", () => {
		it('renders without crashing', () => {
		  const tree = renderer.create(<App />).toJSON();
		  expect(tree).toMatchSnapshot();
		});
	});

	describe("<TodoForm />", () => {
		it('renders without crashing', () => {
		  const tree = renderer.create(<TodoForm />).toJSON();
		  expect(tree).toMatchSnapshot();
		});
	});

	describe("<TodoList />", () => {
		it('renders without crashing', () => {
		  const tree = renderer.create(<TodoList todoList={[]}/>).toJSON();
		  expect(tree).toMatchSnapshot();
		});
	});
});
