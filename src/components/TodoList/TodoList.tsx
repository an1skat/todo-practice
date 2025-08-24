import {Component} from 'react';
import type {Todo} from '../../types/todo.ts';
import {List} from './TodoList.styled.ts';
import TodoItem from './TodoItem.tsx';

interface Props {
	todos: Todo[];
	onDelete: (id: string) => void;
	onToggle: (id: string) => void;
}

export default class TodoList extends Component<Props> {
	render() {
		const {todos, onDelete, onToggle} = this.props;
		return (
			<List>
				{todos.map(todo => (
					<TodoItem
						key={todo.id}
						todo={todo}
						onDelete={onDelete}
						onToggle={onToggle}
					/>
				))}
			</List>
		);
	}
}