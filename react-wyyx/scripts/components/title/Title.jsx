import '../../../style/style.css'

import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Title.css'

export default class Title extends React.Component{
    render(){
        return(
            <header className={styles.head} >
                <Link to="/" className={`${styles.iconMainPage} fl`} href=""></Link>
                <a className={styles.iconLogo} href=""></a>
                <Link to="/cart" className={`${styles.iconCart} fr`} href=""></Link>
                <a className={`${styles.iconSearch} fr`} href=""></a>
            </header>
        )
    }
}