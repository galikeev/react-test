import { Component} from 'react';

/* Счетчик */
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

    resetCounter = () => {
        this.setState({
            counter: 0
        })
    }

	render() {
		return (
			<>
				<button 
					className={'btn btn-primary'}
					onClick={this.changeCounter}>
					Click me
				</button>
                <button 
                    className={'btn btn-primary'}
                    onClick={this.resetCounter}>
                    Reset
                </button>
				{this.props.render(this.state.counter)}
			</>
		)
	}
}

const RenderProps = () => {
    return (
        <Counter render={counter => (
            <Message counter={counter}/>
        )}/>
    );
}

export default RenderProps;