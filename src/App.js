import React from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import SidBar from './components/SidBar';
import Datauser from './components/Datauser';

function App() {
  return (
    <>
      <Container fluid >
        <main>
          <Container>
            <div className='d-none d-sm-block'>
              <Row  >
                <Col md={3}></Col>
                <Col md={9} xs={12} >
                  <h1 className='h1site' > ویرایش اطلاعات کاربری </h1>
                </Col>
              </Row>
            </div>
            <Row>
              <Col md={3}> <SidBar /> </Col>
              <Col md={9} xs={12} ><Datauser /></Col>
            </Row>
          </Container>
        </main>
      </Container>
    </>
  );
}

export default App;
