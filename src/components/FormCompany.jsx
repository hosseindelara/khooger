import React from 'react'
import { Col, Row, Form } from 'react-bootstrap'

export default function FormCompany() {
    return (
        <>

            <h2>اطلاعات حقوقی</h2>

            <hr />
            <p className='d-none d-md-block' style={{ fontSize: "12px", color: '#707070' }}>با تکمیل اطلاعات حقوقی سازمان مورد نظر خود می‌توانید اقدام به خرید سازمانی با دریافت فاکتور رسمی و گواهی ارزش افزوده نمایید</p>
            <Form.Group as={Row} className='formrow' >
                <Form.Label column sm="3">نام شرکت:</Form.Label>
                <Col sm="9">
                    <Form.Control placeholder='نام شرکت مورد نظر خود را وارد کنید' />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className='formrow' >
                <Form.Label column sm="3">کد اقتصادی:</Form.Label>
                <Col sm="9">
                    <Form.Control placeholder='کد اقتصادی مورد نظر خود را وارد کنید' />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className='formrow' >
                <Form.Label column sm="3">شناسه ملی:</Form.Label>
                <Col sm="9">
                    <Form.Control placeholder='شناسه ملی مورد نظر خود را وارد کنید' />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className='formrow' >
                <Form.Label column sm="3">شماره ثبت:</Form.Label>
                <Col sm="9">
                    <Form.Control placeholder='شماره ثبت مورد نظر خود را وارد کنید' />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className='formrow' >
                <Form.Label column sm="3">شماره تلفن ثابت:</Form.Label>
                <Col sm="9">
                    <Form.Control placeholder='شماره تلفن ثابت مورد نظر خود را وارد کنید' />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className='formrow'>
                <Form.Label column sm="3">محل دفتر مرکزی:</Form.Label>
                <Col sm="9">
                    <Row>

                        <Col sm='6' xs='6' >
                            <Form.Control as="select">
                                <option>استان</option>
                                <option>...</option>
                            </Form.Control>
                        </Col>
                        <Col sm='6' xs='6' >
                            <Form.Control as="select">
                                <option>شهر</option>
                                <option>...</option>
                            </Form.Control>
                        </Col>
                    </Row>
                </Col>
            </Form.Group>
        </>
    )
}
