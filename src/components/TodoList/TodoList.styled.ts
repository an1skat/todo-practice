import styled from 'styled-components';

export const List = styled.ul`
	list-style: none;
	padding: 0;
	margin: 10px 0;
	display: flex;
	flex-direction: column;
	gap: 5px;
	
	li {
		display: flex;
		align-items: center;
		gap: 10px;
	}
	
	button {
		border: transparent;
		background: transparent;
		cursor: pointer;
	}
`