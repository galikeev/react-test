import React, { Component } from 'react';
import styled from 'styled-components';

/* Компонентные стили */
const EmpItem = styled.div`
	padding: 20px;
	margin-bottom: 15px;
	border-radius: 5px;
	box-shadow: 5px 5px 10px rgba(0,0,0, .2);
	a {
		display: block;
		margin: 10px 0 10px 0;
		color: ${props => props.active ? 'orange' : 'black'};
	}
	input {
		display: block;
		margin-top: 10px;
	}
`;

const Header = styled.h2`
	font-size: 22px;
`;

export const Button = styled.button`
	display: block;
	padding: 5px 15px;
	background-color: gold;
	border: 1px solid  rgba(0, 0, 0, .2);
	box-shadow: 5px 5px 10px rgba(0,0,0, .2);
	cursor: pointer;
`;

const BigButton = styled(Button)`
	margin: 0 auto;
	width: 245px;
	text-align: center;
`;

/* компонент WhoAmI */
class WhoAmI extends Component {
	constructor(props) {
		super(props);
		this.state = {
			years: 27,
			text: '+++',
			position: 0
		}
	}

	nextYear = () => {
		this.setState(state => ({
			years: state.years + 1
		}))
	}

	commitInputChanges = (e, color) => {
		console.log(color)
		this.setState({
			position: e.target.value
		})
	}

	render() {
		const {name, surname, link} = this.props;
		const {years, text, position} = this.state;
		return (
			<EmpItem active>
				<Button onClick={this.nextYear}>{text}</Button>
				<Header>My name is {name}, surname - {surname}, age - {years}, position - {position}</Header>
				<a href={link}>My Link</a>
				<form>
					<span>Введите должность</span>
					<input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')}/>
				</form>
                <BigButton as='a'>Отправить отчет</BigButton>
			</EmpItem>
		)
	}
}

export default WhoAmI;