import {Component} from 'react';
import * as React from 'react';
import {Input} from './Filter.styled.ts';

interface Props {
	value: string;
	onChange: (value: string) => void;
}

export default class Filter extends Component<Props> {
	handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.props.onChange(e.target.value);
	};
	
	render() {
		return (
			<Input
				type="text"
				value={this.props.value}
				onChange={this.handleChange}
				placeholder="Filter of tasks"
			/>
		);
	}
}