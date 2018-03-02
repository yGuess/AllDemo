import '../../style/style.css'

import React from 'react'

import styles from '../../style/CateListPage.css'

export default class CateListPage extends React.Component{
    render(){
        return(
            <div className="container">
                <header className={styles.Search}>
                    <div className={styles.wrapSearchBox}>
                        <span className={`${styles.iconSearch}`}></span>
                        <span>搜索商品，共xxx件好物</span>
                    </div>
                </header>
                <div className={styles.cateNavVertWrap}>
                    <ul className={styles.navList} >
                        <li className={styles.active}><a href="#">推荐区</a></li>
                        <li><a href="#">个性专区</a></li>
                        <li><a href="#">冬季专区</a></li>
                        <li><a href="#">居家</a></li>
                        <li><a href="#">餐厨</a></li>
                        <li><a href="#">配件</a></li>
                        <li><a href="#">服装</a></li>
                        <li><a href="#">电器</a></li>
                        <li><a href="#">洗护</a></li>
                        <li><a href="#">杂货</a></li>
                        <li><a href="#">饮食</a></li>
                        <li><a href="#">婴童</a></li>
                        <li><a href="#">志趣</a></li>
                    </ul>
                </div>
                <div className={styles.subCateList}>
                    <div className={styles.topBanner}> </div>
                    <div className={styles.cateList}>
                        <div className={styles.cateItem}>
                            <header className={styles.moduleTitle}>严选全球</header>
                            <ul>
                                <li><a href="#">
                                    <img src="../../../assets/images/d77f8cd37529d4fc10932aaf708663bc.png" alt=""/>
                                    <p>床品套件</p>
                                </a></li>
                                <li><a href="#">
                                    <img src="../../../assets/images/d77f8cd37529d4fc10932aaf708663bc.png" alt=""/>
                                    <p>背枕</p>
                                </a></li>
                                <li><a href="#">
                                    <img src="../../../assets/images/d77f8cd37529d4fc10932aaf708663bc.png" alt=""/>
                                    <p>家具</p>
                                </a></li>
                                <li><a href="#">
                                    <img src="../../../assets/images/d77f8cd37529d4fc10932aaf708663bc.png" alt=""/>
                                    <p>收纳</p>
                                </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}