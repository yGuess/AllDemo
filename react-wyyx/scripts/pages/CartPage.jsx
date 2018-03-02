import '../../style/style.css'

import React, { Component } from 'react'

import styles from '../../style/CartPage.css'

class CateListPage extends Component{
    render(){
        return(
            <div className={styles.container}>
                <header className={styles.cartTitle} >购物车</header>
                <div className={styles.tips} >
                    <span>30天无忧退货</span>
                    <span>48小时快速退款</span>
                    <span>满88元免邮费</span>
                </div>
                <div className={styles.cartNull}>
                    <p>去添加点什么吧</p>
                    <button className={styles.btnLogin}>登录</button>
                </div>
            </div>
        )
    }
}
export default CateListPage