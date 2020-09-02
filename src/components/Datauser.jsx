import React from 'react'
import { Row, Col } from 'react-bootstrap'
import FormCompany from './FormCompany'
import FormPersonal from './FormPersonal'
import FormPassword from './FormPassword'
const Datauser = () => {
    return (
        <Row style={{ backgroundColor: ' #FFFFFF', border: '1px solid #E4E5E7', borderRadius: '5px' }} >
            <Col md={6} xs={12} >
                <FormPersonal />
            </Col>
            <Col md={6} xs={12} >
                <FormCompany />
            </Col>
            <Col md={12} xs={12} >
                <FormPassword />
            </Col>
            <Col className='text-center justify-content-center' style={{ padding: '50px 0px' }} >
                <span className='closebtn' >انصراف</span>
                <span className='submitbtn' >ثبت اطلاعات کاربری</span>
            </Col>
        </Row>

    )
}

export default Datauser