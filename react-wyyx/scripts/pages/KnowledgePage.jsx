import '../../style/style.css'

import React from 'react'

import Slider2 from '../components/slider2/Slider.jsx'

import styles from '../../style/KnowledgePage.css'

export default class KnowledgePage extends React.Component{
    constructor(){
        super()
        this.icons = [
            { backgroundImage: 'url(../../assets/images/icons/hxmyanxuan-img-icon-normal-go2.png)'}
        ]
        this.banner = {
            translateX: '8.49333rem',
            bgImgs: [
                { backgroundImage: 'url(../../assets/images/6570fc6aea232b19a4d4154080081920.jpg)'},
                { backgroundImage: 'url(../../assets/images/0cce87a243b64a9b4344746db69b3b84.jpg)'},
                { backgroundImage: 'url(../../assets/images/0569ea9f961195388cd3c31033ea5e4f.jpg)'},
                { backgroundImage: 'url(../../assets/images/6ce8140cf768ab16f60e20c41d8405de.jpg)'}
            ]
        }
        this.channel = {
            bgImgs: [
                { backgroundImage: 'url(../../assets/images/254e04f823354c67d765d68c4012b64e.png)' },
                { backgroundImage: 'url(../../assets/images/1662ac1fabbc2e495bdda39357a93d65.png)' },
                { backgroundImage: 'url(../../assets/images/cbcc9dcba30d4f8448a4412db4d9122f.png)' },
                { backgroundImage: 'url(../../assets/images/7be4ed9901fd6b110158e3381eb67ae2.png)' }
            ]
        }
        this.rcmd = [
            { backgroundImage: 'url(../../assets/images/7be4ed9901fd6b110158e3381eb67ae2.png)' },
            { backgroundImage: 'url(../../assets/images/c1eb99df3dd173fb5b2eea8f40486969.jpg)' },
            { backgroundImage: 'url(../../assets/images/e5312aa8b8ac627cfa617f3f3b5bbe98.jpg)' }
        ]
    }
    render(){
        return(
            <div className={styles.kExplore}>
                <div className={styles.exploreBanners}>
                    <ul className={styles.eBannerItems}>
                        <li>
                            <a style={this.banner.bgImgs[0]} className={styles.active} href="">
                                <div className={styles.ctx} >
                                    <p className={styles.title}>每满99立减15</p>
                                    <p className={styles.desc}>今年过年送什么？</p>
                                    <p className={styles.desc}>严选来支招了</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a style={this.banner.bgImgs[1]} href="">
                                <div className={styles.ctx} >
                                    <p className={styles.title}>宠物用品2件8折</p>
                                    <p className={styles.desc}>铲屎官们</p>
                                    <p className={styles.desc}>新年礼物备了吗</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a style={this.banner.bgImgs[2]} href="">
                                <div className={styles.ctx} >
                                    <p className={styles.title}>晚安好物分享</p>
                                    <p className={styles.desc}>6件小事</p>
                                    <p className={styles.desc}>美好睡前时光</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a style={this.banner.bgImgs[3]} href="">
                                <div className={styles.ctx} >
                                    <p className={styles.title}>全球知名酒庄直供</p>
                                    <p className={styles.desc}>欢畅的新年，</p>
                                    <p className={styles.desc}>都有一杯酒</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={styles.exploreChannels}>
                    <ul>
                        <li><a href="">
                            <div style={this.channel.bgImgs[0]} className={`${styles.wrapGoodImg} bgImg`}>
                                <p>279片文章</p>
                            </div>
                            <p className={styles.cTxt}>严选推荐</p>
                        </a></li>
                        <li><a href="">
                            <div style={this.channel.bgImgs[1]} className={`${styles.wrapGoodImg} bgImg`}>
                                <p>139片文章</p>
                            </div>
                            <p className={styles.cTxt}>挑款师推荐</p>
                        </a></li>
                        <li><a href="">
                            <div style={this.channel.bgImgs[2]} className={`${styles.wrapGoodImg} bgImg`}>
                                <p>50片文章</p>
                            </div>
                            <p className={styles.cTxt}>XX的好货推荐</p>
                        </a></li>
                        <li><a href="">
                            <div style={this.channel.bgImgs[3]} className={`${styles.wrapGoodImg} bgImg`}>
                                <p>313片文章</p>
                            </div>
                            <p className={styles.cTxt}>严选LOOK</p>
                        </a></li>
                        <li><a href="">
                            <div style={this.channel.bgImgs[0]} className={`${styles.wrapGoodImg} bgImg`}>
                                <p>279片文章</p>
                            </div>
                            <p className={styles.cTxt}>严选推荐</p>
                        </a></li>
                        <li><a href="">
                            <div style={this.channel.bgImgs[1]} className={`${styles.wrapGoodImg} bgImg`}>
                                <p>139片文章</p>
                            </div>
                            <p className={styles.cTxt}>挑款师推荐</p>
                        </a></li>
                    </ul>
                </div>
                <div className={styles.exploreRcmds}>
                    <header className={styles.moduleTitle}>为你推荐</header>
                    <a href="" className={styles.mainPosItem} >
                        <div className={`${styles.mainImg} bgImg`} style={this.rcmd[0]} >
                            <div className={styles.topicTag}>
                                <span>严选推荐</span>
                            </div>
                        </div>
                        <div className={styles.mainInfo}>
                            <p>那些“不可能完成”的选品难题<span className="fr oneLine">12.9元起</span></p>
                            <p className="oneLine" >困扰挑款师的那些烦恼，都被解决了吗？</p>
                        </div>
                    </a>
                    <a href="" className={styles.minorItem}>
                        <div className={styles.topicInfo}>
                            <div className={styles.author}>
                                <img src="../../assets/images/15153799178700003.png" alt="avatar"/>
                                <span className="oneLine" >洗护组: XX</span>
                            </div>
                            <p className={`${styles.infoTitle} oneLine`}>洗衣液够亲肤，才敢放心洗</p>
                            <p className="twoLine">不知道大家洗衣时有没有这样一种感受，市面上大多的洗衣液用完后，手总会涩涩的。其实...</p>
                        </div>
                        <div className={`${styles.mainImg} bgImg minorPic`} style={this.rcmd[1]} >
                            <div className={styles.topicTag}>
                                <span>严选推荐</span>
                            </div>
                        </div>
                    </a>
                    <a href="" className={styles.minorItem}>
                        <div className={styles.topicInfo}>
                            <div className={styles.author}>
                                <img src="../../assets/images/15153799178700003.png" alt="avatar"/>
                                <span className="oneLine" >洗护组: XX</span>
                            </div>
                            <p className={`${styles.infoTitle} oneLine`}>一条围巾，暖过拥抱</p>
                            <p className="twoLine">所谓少即是多，简单就是百搭和高级。网易严选这款羊毛围巾，是冬日必备的基础款。相比...</p>
                        </div>
                        <div className={`${styles.mainImg} bgImg minorPic`} style={this.rcmd[1]} >
                            <div className={styles.topicTag}>
                                <span>XX的好货推荐</span>
                            </div>
                        </div>
                    </a>
                </div>
                <div className={styles.exploreTenFifteen}>
                    <header className={styles.moduleTitle}>十点一刻</header>
                    <div className={styles.wrapSwipe}>
                        <ul>
                            <li className={`bgImg ${styles.tfItem}`}>
                                <a href="">
                                    <header className={styles.tfTip}> <span>今日话题</span> </header>
                                    <p className={styles.title}>你的城市下雪了吗</p>
                                    <p className={`${styles.desc} twoLine`}>记得穿雪地靴保暖哟。</p>
                                    <div className={`${styles.joinInfo} clearfix`}> 
                                        <img src="../../assets/images/15153799178700003.png" alt="avatar"/>
                                        <div className={styles.dots}>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                        <span>3人参与话题</span>
                                    </div>
                                </a>
                            </li>
                            <li className={`bgImg ${styles.tfItem} ${styles.more}`}>
                                <a href="">
                                    <span>查看全部</span>
                                    <span style={this.icons[0]} className="icon"></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.exploreGlobal}>
                    <header className={styles.moduleTitle}>严选全球</header>
                    <div className={styles.wrapMainImg}>
                        <img src="../assets/images/4a38afac38b2d74373973eb894abb571.png" alt="display_img"/>
                    </div>
                    <div className={styles.descripText}>
                        <p className={`${styles.dtName} oneLine`}>严选全球日本篇</p>
                        <p className={styles.dtText}>极具日式风情的餐厨好物，具有巧思的精致生活好物，日本制造商品不定期更新中。</p>
                    </div>
                </div>
            </div>
        )
    }
}