import React, {Component} from 'react';
import { Container } from 'react-bootstrap';
import '../../App.css';

class RefTest extends Component {
    myRef = React.createRef(); /* стандартный способ создать ref */

    componentDidMount() {
        this.myRef.current.focus();
    }

    onFocusInput = () => {
        if (!this.myRef.current.value) {
            this.myRef.current.focus();
        }
    }

    // setInputRef = (elem) => { /* Callback ref */
    //     this.myRef = elem;
    // }

    render() {
        return (
            <Container>
                <form className="w-50 border mt-5 p-3 m-auto">
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
                        <input 
                            ref={this.myRef}
                            type="email" 
                            className='form-control' 
                            id="exampleFormControlInput1" 
                            placeholder="name@example.com"/>
                        </div>
                        <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">This is test ref on class</label>
                        <textarea onClick={this.onFocusInput} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </form>
            </Container>
        );
    }
}

export default RefTest;