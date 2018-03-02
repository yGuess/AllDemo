import React from 'react'
import styles from './Tabbar.css'
import { Link } from 'react-router-dom'

export default class Tabbar extends React.Component{
    constructor(){
        super()
        this.state = {
            tabbarValue: 'index',
            tabbarItems: ['index','goods','category','cart','personal']
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e){
        e.preventDefault()
        let _parent = e.target.parentNode,
            pos = this.state.tabbarItems.indexOf(_parent.className)
        
        if(pos !== -1){
            this.setState({
                tabbarValue: this.state.tabbarItems[pos]
            })
            this.props.onClick(this.state.tabbarItems[pos])
        }else{
            console.log('点到区域外了')
        }
    }

    render(){
        return(
                <nav className={styles.tabbar} onClick={this.handleClick}>
                    <Link to="/" className={this.state.tabbarValue == 'index' ? styles.active : 'index'}>
                        <span className={`${styles.icon} ${styles.iconIndex}`}></span>
                        <span>首页</span>
                    </Link>
                    <Link to="/knowledge" className={this.state.tabbarValue == 'goods' ? styles.active : 'goods'}>
                        <span className={`${styles.icon} ${styles.iconGoods}`}></span>
                        <span>识物</span>
                    </Link>
                    <Link to="/catelist" className={this.state.tabbarValue == 'category' ? styles.active : 'category'}>
                        <span className={`${styles.icon} ${styles.iconCategory}`}></span>
                        <span>分类</span>
                    </Link>
                    <Link to="/cart" className={this.state.tabbarValue == 'cart' ? styles.active : 'cart'}>
                        <span className={`${styles.icon} ${styles.iconCart}`}></span>
                        <span>购物车</span>
                    </Link>
                    <Link to="/personal" className={this.state.tabbarValue == 'personal' ? styles.active : 'personal'}>
                        <span className={`${styles.icon} ${styles.iconPersonal}`}></span>
                        <span>个人</span>
                    </Link>
                </nav>
        )
    }
}

 