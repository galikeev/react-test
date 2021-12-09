import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Container} from 'react-bootstrap';

class Portal extends Component {
    constructor(props) {
        super(props);
        this.node = document.createElement('div');
        this.node.style.position = 'relative';
    }

    componentDidMount() {
        document.body.appendChild(this.node);
    }

	componentWillUnmount() {
        document.body.removeChild(this.node);
    }

    render() {
        return ReactDOM.createPortal(this.props.children, this.node);
    }
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

export default PortalTest;

