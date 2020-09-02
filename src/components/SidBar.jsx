import React from 'react'
import { Card } from 'react-bootstrap'
import styles from './SidBar.module.scss'

import pro from './../images/acount/Mask Group 209.png'
import ord from './../images/acount/Mask Group 210.png'
import alg from './../images/acount/Mask Group 212.png'
import acounty from './../images/acount/Mask Group 215.png'
import adres from './../images/acount/Mask Group 214.png'
import comment from './../images/acount/Mask Group 213.png'
import exit from './../images/acount/Mask Group 216.png'



import dashbord from './../images/sleer/Mask Group 233.png'
import order from './../images/sleer/Mask Group 234.png'
import prodact from './../images/sleer/Mask Group 235.png'
import info from './../images/sleer/Mask Group 236.png'

const SidBar = () => {
    return (
        <>
            <Card className={styles.boxUser} >
                <p className={styles.username} >داریوش حبیب پور</p>

                <span className={styles.phonenamber} >09358924658</span>
                <hr />
                <p className={styles.Credit} >اعتبار حساب:</p>
                <b>25,000,000 تومان</b>
            </Card>
            <div className='d-none d-md-block' >
                <Card className={styles.boxAccount}>
                    <Card.Header className={styles.boxAccountheder}>
                        <p>حساب کاربری شما</p>
                    </Card.Header>
                    <Card.Body>
                        <ul className={styles.liaconte} >
                            <li><img src={pro} alt='پروفایل' />پروفایل</li>
                            <li><img src={ord} alt='سفارش' />سفارش های من</li>
                            <li><img src={alg} alt='علاقه' />علاقه مندی ها</li>
                            <li><img src={acounty} alt='ویرایش' />ویرایش اطلاعات</li>
                            <li><img src={adres} alt='آدرس' />آدرس ها</li>
                            <li><img src={comment} alt='نظرات' />نظرات من</li>
                            <li><img src={exit} alt='خروج' />خروج از حساب</li>
                        </ul>
                    </Card.Body>
                </Card>
            </div>
            <div className='d-none d-md-block' >
                <Card className={styles.boxAccount}>
                    <Card.Header className={styles.boxAccountheder}>
                        حساب فروشنده
                </Card.Header>
                    <Card.Body>
                        <ul className={styles.liaconte}>
                            <li><img src={dashbord} alt='داشبورد' />داشبورد فروشنده</li>
                            <li><img src={order} alt='سفارشات' />سفارشات</li>
                            <li><img src={prodact} alt='محصولات' />محصولات</li>
                            <li><img src={info} alt='اطلاعات' />اطلاعات فروشگاه</li>
                        </ul>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default SidBar