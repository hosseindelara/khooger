import React from 'react'
import { Form, Row, Col } from 'react-bootstrap'

const FormPassword = () => {
    return (
        <>
            <h3>ویرایش کلمه عبور</h3>
            <hr />
            <Form>
                <Form.Group as={Row}  >
                    <Col sm='3' >
                        <Form.Label column >کلمه عبور فعلی:</Form.Label>
                        <Form.Control placeholder='کلمه عبور فعلی خود را وارد کنید' />
                    </Col>
                    <Col sm='4' >
                        <Form.Label column >کلمه عبور فعلی:</Form.Label>
                        <Form.Control placeholder='کلمه عبور جدید خود را وارد کنید' />
                    </Col>
                    <Col sm='4' >
                        <Form.Label column >تکرار کلمه عبور جدید:</Form.Label>
                        <Form.Control placeholder='تکرار کلمه عبور جدید خود را وارد کنید' />
                    </Col>
                </Form.Group>
            </Form>
            <hr style={{ marginTop: '40px' }} />
        </>
    )
}

export default FormPassword