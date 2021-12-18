import {Container, Row, Col} from 'react-bootstrap';

const ChildrenWrapper = (props) => {
    return (
        <Container>
            <Row>
                <Col>
                    {props.left}
                </Col>

                <Col>
                    {props.right}
                </Col>
            </Row>
        </Container>
    )
}

export default ChildrenWrapper;