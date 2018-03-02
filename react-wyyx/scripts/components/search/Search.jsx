import React from 'react'
import styles from './Search.css'

export default class Search extends React.Component{
    render(){
        return(
            <div className={styles.search}>
                <span className={styles.iconSearch}></span>
                <span>搜索商品,共xxx件好物</span>
            </div>
        )
    }
}