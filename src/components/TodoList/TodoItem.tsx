import {Component} from 'react';
import type {Todo} from '../../types/todo.ts';

interface Props {
	todo: Todo;
	onDelete: (id: string) => void;
	onToggle: (id: string) => void;
}

export default class TodoItem extends Component<Props> {
	render() {
		const {todo, onDelete, onToggle} = this.props;
		return (
			<li>
				<input
					type="checkbox"
					checked={todo.completed}
					onChange={() => onToggle(todo.id)}
				/>
				<span style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
					{todo.text}
				</span>
				<button onClick={() => onDelete(todo.id)}>❌</button>
			</li>
		);
	}
}