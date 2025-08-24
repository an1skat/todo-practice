import {Component} from 'react';
import {Wrapper} from './Info.styled.ts';

interface Props {
	total: number,
	completed: number,
}

export default class Info extends Component<Props> {
	render() {
		return (
			<Wrapper>
				<p>Всього завдань: {this.props.total}</p>
				<p>Виконано: {this.props.completed}</p>
			</Wrapper>
		)
	}
}