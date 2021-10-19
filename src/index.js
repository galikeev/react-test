import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App2 from './App2';
import App from './App';
import {Button} from './App';
import BootstrapTest from './BootstrapTest';
import styled from 'styled-components';

import 'bootstrap/dist/css/bootstrap.min.css';

const BigButton = styled(Button)`
	margin: 0 auto;
	width: 245px;
	text-align: center;
`;

ReactDOM.render(
	<React.StrictMode>
		<App/>
		<BigButton as='a'>Отправить отчет</BigButton>
		<BootstrapTest/>
		<App2/>
	</React.StrictMode>,
	document.getElementById('root')
);

