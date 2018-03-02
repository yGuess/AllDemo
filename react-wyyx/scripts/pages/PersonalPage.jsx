import '../../style/style.css'

import React from 'react'

import styles from '../../style/PersonalPage.css'

import Title from '../components/title/Title.jsx'

export default class PersonalPage extends React.Component{
    render(){
        return(
            <div className="container">
                <Title />
                <div className={styles.needLogin}>
                    <div className={styles.logo}>
                        <img src="../../../assets/images/icons/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="logo"/>
                    </div>
                    <div className={styles.btnLogin}>网易邮箱帐号登录</div>
                    <div className={styles.thirdLogin}>
                        <div className={styles.thirdItem}>
                            <span className={`icon ${styles.wxIcon}`} ></span>
                            <span>微信</span>
                        </div>
                        <div className={styles.thirdItem}>
                            <span className={`icon ${styles.qqIcon}`} ></span>
                            <span>QQ</span>
                        </div>
                        <div className={styles.thirdItem}>
                            <span className={`icon ${styles.weiboIcon}`} ></span>
                            <span>微博</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}