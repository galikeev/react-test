import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Container} from 'react-bootstrap';

class PortalTest extends Component {
    state = {
        isOpen: false
    }

    onHandleClick = () => {
        this.setState(() => ({
            isOpen: !this.state.isOpen
        }))
    }

	render() {
        return (
            <Container>
                    <button 
                        className={'btn btn-primary'} 
                        onClick={this.onHandleClick}>
                            Click open portal
                            <Portal>
                                {this.state.isOpen && <Msg/>}
                            </Portal>
                    </button>
            </Container>
        )
    }
}

const Portal = (props) => {
	const node = document.createElement('div');
	document.body.appendChild(node);
    node.style.position = 'relative';

	return ReactDOM.createPortal(props.children, node);
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
			Hello Portal
		</div>
	)
}

export default PortalTest;

