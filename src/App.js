import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import {Container} from 'react-bootstrap';

import WhoAmI from './components/whoAmI/WhoAmI';
import BootstrapTest from './components/bootstrapTest/BootstrapTest';
import ChildrenWrapper from './components/propsChildrenTest/ChildrenWrapper';
import ChildrenTest from './components/propsChildrenTest/ChildrenTest';
import RenderProps from './components/renderProps/RenderProps';
import RefTest from './components/refTest/RefTest';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const Wrapper = styled.div`
	width: 800px;
	margin: 80px auto 0 auto;
`;

/*  */
function useInputWithValidate(initialValue) {
	const [value, setValue] = useState(initialValue);

	const onChange = event => {
		setValue(event.target.value);
	}

	const validateInput = () => {
		return value.search(/\d/) >= 0
	}

	return {value: value, onChange: onChange, validateInput: validateInput}
}

const FormFirst = () => {

	const input = useInputWithValidate('');
	const textArea = useInputWithValidate('');

	const color = input.validateInput() ? 'text-danger' : null

	return (
		<Container>
			<form className="w-50 border mt-5 p-3 m-auto">
				<div className="mb-3">
					<input value={`${input.value} / ${textArea.value}`} type="text" className="form-control" readOnly />
					<label htmlFor="exampleFormControlInput1" className="form-label mt-30">Email address</label>
					<input
						onChange={input.onChange}
						type="email"
						value={input.value}
						className={`form-control ${color}`}
						id="exampleFormControlInput1" 
						placeholder="name@example.com"/>
				</div>
				<div className="mb-3">
					<label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
					<textarea
						onChange={textArea.onChange}
						value={textArea.value}
						className="form-control" 
						id="exampleFormControlTextarea1" 
						rows="3"></textarea>
				</div>
				<Portal>
					<Msg/>
				</Portal>
			</form>
		</Container>
	)
}

/*  */

const Portal = (props) => {
	const node = document.createElement('div');
	document.body.appendChild(node);

	return ReactDOM.createPortal(props.children, node)
}

const Msg = () => {
	return (
		<div 
			style ={{
				'width': '500px',
				'height': '150px',
				'backgroundColor': 'red',
				'position': 'absolute',
				'right': '0',
				'bottom': '0'
			}}>
			Hello
		</div>
	)
}

/*  */

function App() {
	return (
		<Wrapper>
			<WhoAmI name="Diana" surname="Altdinova" link="vk.com"/>
			<WhoAmI name="Ramil" surname="Galikeev" link="facebook.com"/>

			<BootstrapTest/>

			<ChildrenWrapper
				left = {
					<ChildrenTest color={'primary'}>
						<h2>This weel was hard</h2>
						<h2>Hello world</h2>
					</ChildrenTest>
				}
				right = {
					<ChildrenTest color={'primary'}>
						<h2>ALL RIGHT!!!</h2>
					</ChildrenTest>
				}
			/>

			<RenderProps/>

			<RefTest/>

			<FormFirst/>
		</Wrapper>
	);
}

export default App;
