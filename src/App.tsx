import {Component} from 'react';
import type {Todo} from './types/todo.ts';
import todosData from './data/todo.json';
import TodoEditor from './components/TodoEditor/TodoEditor.tsx';
import Filter from './components/Filter/Filter.tsx';
import TodoList from './components/TodoList/TodoList.tsx';
import Info from './components/Info/Info.tsx';

interface AppState {
	todos: Todo[];
	filter: string;
}

export default class App extends Component<{}, AppState> {
	state: AppState = {
		todos: todosData,
		filter: ''
	};
	
	addTodo = (text: string) => {
		const newTodo: Todo = {
			id: `id-${Date.now()}`,
			text,
			completed: false
		};
		this.setState((prev) => ({todos: [...prev.todos, newTodo]}));
	};
	
	deleteTodo = (id: string) => {
		this.setState((prev) => ({
			todos: prev.todos.filter((todo: Todo) => todo.id !== id)
		}));
	};
	
	toggleCompleted = (id: string) => {
		this.setState((prev) => ({
			todos: prev.todos.map((todo =>
					todo.id === id ? {...todo, completed: !todo.completed} : todo
			))
		}));
		
	};
	
	changeFilter = (value: string) => {
		this.setState({
			filter: value
		});
	};
	getVisibleTodos = () => {
		const {todos, filter} = this.state;
		return todos.filter(todo =>
			todo.text.toLowerCase().includes(filter.toLowerCase())
		);
	};
	
	render() {
		const visibleTodos = this.getVisibleTodos();
		const completedCount = this.state.todos.filter(t => t.completed).length;
		
		return (
			<div style={{padding: '20px', maxWidth: '500px', margin: '0 auto'}}>
				<h1>Todo App</h1>
				<TodoEditor onSubmit={this.addTodo} />
				<Filter
					value={this.state.filter}
					onChange={this.changeFilter}
				/>
				<TodoList
					todos={visibleTodos}
					onDelete={this.deleteTodo}
					onToggle={this.toggleCompleted}
				/>
				<Info total={this.state.todos.length} completed={completedCount} />
			</div>
		);
	}
}
