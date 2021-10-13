import React, { Component } from 'react';
import styled from 'styled-components';
import ChildrenTest from './ChildrenTest';

import './App.css';

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
			</EmpItem>
		)
	}
}

const Wrapper = styled.div`
	width: 600px;
	margin: 80px auto 0 auto;
`;

const DynamicGreating = (props) => {
	return (
		<div className={'mb-3 p-3 border border-' + props.color}>
			{
				React.Children.map(props.children, child => {
					return React.cloneElement(child, {className: 'shadow p-3 m-3 border rounded'})
				})
			}
		</div>
	)
}

const HelloGreaing = () => {
	return (
		<div style={{'width': '600px', 'margin': '0 auto'}}>
			<DynamicGreating color={'primary'}>
				<h2>Hello world</h2>
			</DynamicGreating>
		</div>
	)
}

const Message = (props) => {
	return (
		<h2>The counter is {props.counter}</h2>
	)
}

class Counter extends Component {
	state = {
		counter: 0
	}

	changeCounter = () => {
		this.setState(({counter}) => ({
			counter: counter + 1
		}))
	}

	render() {
		return (
			<>
				<button 
					className={'btn btn-primary'}
					onClick={this.changeCounter}>
					Click me
				</button>
				{this.props.render(this.state.counter)}
			</>
		)
	}
}

function App() {
	return (
		<Wrapper>

			<Counter render={counter => (
				<Message counter={counter}/>
			)}/>

			<HelloGreaing/>
			<ChildrenTest
				left = {
					<DynamicGreating color={'primary'}>
						<h2>This weel was hard</h2>
						<h2>Hello world</h2>
					</DynamicGreating>
				}
				right = {
					<DynamicGreating color={'primary'}>
						<h2>ALL RIGHT!!!</h2>
					</DynamicGreating>
				}
			/>

			<WhoAmI name="Diana" surname="Altdinova" link="vk.com"/>
			<WhoAmI name="Ramil" surname="Galikeev" link="facebook.com"/>
		</Wrapper>
	);
}

export default App;
