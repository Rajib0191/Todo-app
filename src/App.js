import React from 'react'
import Todos from './components/todos/Index'
import {Container, Row, Col} from 'reactstrap'

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Todos />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
