import {Component} from 'react';
import * as React from 'react';
import {Button, Form, Input} from './TodoEditor.styled.ts';

interface Props {
	onSubmit: (text: string) => void;
}

interface State {
	textValue: string;
}

export default class TodoEditor extends Component<Props> {
	state: State = {
		textValue: "",
	}
	
	handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({
			textValue: e.target.value,
		})
	}
	
	handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (this.state.textValue.trim()) {
			this.props.onSubmit(this.state.textValue);
			this.setState({
				textValue: "",
			})
		}
	}
	
	render() {
		return (
			<Form onSubmit={this.handleSubmit}>
				<Input
				type="text"
				value={this.state.textValue}
				onChange={this.handleChange}
				placeholder="Wrtie new task"
				/>
				<Button type="submit">Add</Button>
			</Form>
		)
	}
}