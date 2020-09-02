import React from 'react'
import { Form, Col, Row } from 'react-bootstrap'

export default function FormPersonal() {
    return (
        <>
            <h2>اطلاعات شخصی</h2>
            <hr />
            <p className='d-none d-md-block' style={{ fontSize: "12px", color: '#707070' }} >با تکمیل اطلاعات حقوقی سازمان مورد نظر خود می‌توانید اقدام به خرید سازمانی با دریافت فاکتور رسمی و گواهی ارزش افزوده نمایید</p>
            <Form>
                <Form.Group as={Row} className='formrow'  >
                    <Form.Label column sm="3" >نام:</Form.Label>
                    <Col sm="9">
                        <Form.Control placeholder='نام خود را وارد کنید' />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className='formrow' >
                    <Form.Label column sm="3">نام خانوادگی:</Form.Label>
                    <Col sm="9">
                        <Form.Control placeholder='نام خانوادگی خود را وارد کنید' />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className='formrow'>
                    <Form.Label column sm="3">تاریخ تولد:</Form.Label>
                    <Col sm="9">
                        <Row>
                            <Col sm='4' xs='4' > <Form.Control as="select">
                                <option>روز</option>
                                <option>...</option>
                            </Form.Control></Col>
                            <Col sm='4' xs='4' > <Form.Control as="select">
                                <option>ماه</option>
                                <option>...</option>
                            </Form.Control></Col>
                            <Col sm='4' xs='4' > <Form.Control as="select">
                                <option>سال</option>
                                <option>...</option>
                            </Form.Control></Col>

                        </Row>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className='formrow' >
                    <Form.Label column sm="3">کد ملی:</Form.Label>
                    <Col sm="9">
                        <Form.Control placeholder='کد ملی خود را وارد کنید' />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className='formrow' >
                    <Form.Label column sm="3">شماره تماس:</Form.Label>
                    <Col sm="9">
                        <Form.Control placeholder='شماره تماس خود را وارد کنید' />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className='formrow' >
                    <Form.Label column sm="3">ایمیل:</Form.Label>
                    <Col sm="9">
                        <Form.Control placeholder='ایمیل خود را وارد کنید' />
                    </Col>
                </Form.Group>
                <Form.Check
                    type='checkbox'
                    id='default-News'
                    style={{ marginBottom: '50px' }}
                >
                    <Form.Check.Input type='checkbox' />
                    <Form.Check.Label  >اشتراک خبرنامه</Form.Check.Label>
                </Form.Check>
            </Form>
        </>
    )
}
