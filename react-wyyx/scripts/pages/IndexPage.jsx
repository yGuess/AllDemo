import '../../style/style.css'

import React from 'react'
import styles from '../../style/IndexPage.css'

import Slider from '../components/slider/Slider.jsx'

import timeLib from '../../assets/lib/time'

export default class IndexPage extends React.Component{
    constructor(){
        super()
        this.navList = ['推荐','居家','餐厨','配件','服装','电器','洗护','杂货','饮食','婴童','志趣']
        this.icons = [
            { backgroundImage: 'url(../../assets/images/icons/cae45612b8aae577d8bd73338e2fc02c.png)'},
            { backgroundImage: 'url(../../assets/images/icons/hxmyanxuan-img-icon-normal-go2.png)'},
            { backgroundImage: 'url(../../assets/images/icons/img-icon-normal-indexNewArrow-f3b56d449b.png)'},
            { backgroundImage: 'url(../../assets/images/icons/img-icon-normal-goodGridMore-233aaf669a.png)'}
        ]
        this.bgPic = [
            { backgroundImage: 'url(../../assets/images/a3ea2d1108c94c7dece05eddf95f6df5.jpg)' }
        ]
        this.data = {
            countDownTimer: -1,
            countDown: {
                h: 0,
                m: 0,
                s: 0
            },
            sliderImgs: [
                 '../../assets/images/046d56ac0cd8adadf368fb8fd478c8c8.jpg',
                 '../../assets/images/0df7e6f9d30668c74b8a24599946d499.jpg',
                 '../../assets/images/7ae187def725a14c75ae78d4b2f8e14a.jpg',
                 '../../assets/images/9c53232632c262a175cc18de9d99899e.jpg',
                 '../../assets/images/291878253cb96c6992c8a5c875248b4d.jpg',
                 '../../assets/images/80586e61f75fa4d2d7c87cc66831fd76.jpg',
                 '../../assets/images/c0cf7b4cf7dcbc6dd9866ab2d23faf93.jpg',
                 '../../assets/images/e5891a68df93c5ee57ddb5b256068dac.jpg'
             ]
        }
        this.state = {
            countDown: {
                h: 0,
                m: 0,
                s: 0
            }
        }

        this.countDown = this.countDown.bind(this)
    }

    countDown(){
        let t = this.data.countDown
        parseInt(t.s)
        t.s--

        if(t.s < 0){
            if(t.m == '00'){
                if(t.h == '00') return
                else{
                    parseInt(t.h)
                    t.h--
                    t.h < 0 ? t.h='0'+t.h : ''

                    t.m = '59'
                }
            }else{
                parseInt(t.m)
                t.m--
                t.m < 10 ? t.m='0'+t.m : ''
            }
            t.s = '59'
        }else{
            t.s < 10 ? t.s='0'+t.s : '' 
        }
        this.setState({ countDown: JSON.parse(JSON.stringify(t)) })
        this.data.countDownTimer = setTimeout(this.countDown , 1000)
    }

    componentWillUnmount(){
        clearTimeout(this.data.countDownTimer)
    }

    componentDidMount(){
        // 以当前时间开始倒计时
        let current = timeLib.getTime()
        current = current.match(/\s.{8}\s/ig)
        current = current[0].replace(' ','').split(':')
        this.data.countDown = {
            h: current[0],
            m: current[1],
            s: current[2]
        }
        this.setState({
            countDown: {
                h: current[0],
                m: current[1],
                s: current[2]
            }
        })
   
        this.data.countDownTimer = setTimeout(this.countDown , 1000)
    }

    render(){
        return(
            <div className={styles.pb1_3}>
                <header className={styles.header}>
                    <div className={styles.line}>
                        <a className={styles.logo} href="/"></a>
                        <div className={styles.search}>
                            <span className={`${styles.iconSearch}`}></span>
                            <span>搜索商品，共xxx件好物</span>
                        </div>
                    </div>
                    <div className={styles.nav}>
                        <ul>
                            {
                                this.navList.map((ctx,index) => {
                                return <li className={index==0 ? `${styles.active}`:''} key={index} ><a>{ctx}</a></li>
                                })
                            }
                        </ul>
                    </div>
                </header>
                <div className={`displayBox ${styles.mt2}`}>
                    <Slider slideImgs={this.data.sliderImgs} />
                    <div className={styles.wrapServicePolicy}>
                        <ul>
                            <li>
                                <span className={styles.wsIcon} style={this.icons[0]}></span>
                                <span>wy自营品牌</span>
                            </li>
                            <li>
                                <span className={styles.wsIcon} style={this.icons[0]}></span>
                                <span>30天无忧退货</span>
                            </li>
                            <li>
                                <span className={styles.wsIcon} style={this.icons[0]}></span>
                                <span>48小时快速退款</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="displayBox">
                    <header className={styles.ht}>
                        <a href="#">
                            <span>品牌制造商直供</span>
                            <span className={styles.msIcons} style={this.icons[1]}></span>
                        </a>
                    </header>
                    <div className={styles.manufacturersSupplying}>
                        <ul>
                            <li><a href="">
                                <div className={styles.msText}>
                                    <p className="oneLine">Adidas制造商</p>
                                    <p>35元起</p>
                                </div>
                                <img src="../../assets/images/2fc924ae44eb0a37dda18690368851af.png" alt="manufacturersSupplying"/>
                            </a></li>
                            <li><a href="">
                                <div className={styles.msText}>
                                    <p className="oneLine">UGG制造商</p>
                                    <p>129元起</p>
                                </div>
                                <img src="../../assets/images/84d16a100eb7997ff106c48932268a4e.png" alt="manufacturersSupplying"/>
                            </a></li>
                            <li><a href="">
                                <div className={styles.msText}>
                                    <p className="oneLine">新秀丽制造商</p>
                                    <p>49元起</p>
                                </div>
                                <img src="../../assets/images/f57d460dde6e737f2bacd9f67cb73a41.png" alt="manufacturersSupplying"/>
                            </a></li>
                            <li><a href="">
                                <div className={styles.msText}>
                                    <p className="oneLine">MUJI制造商</p>
                                    <p>12.9元起</p>
                                </div>
                                <img src="../../assets/images/4bdc2ae0a30c4a10ea95876a67c695bc.png" alt="manufacturersSupplying"/>
                            </a></li>
                        </ul>
                    </div>
                </div>
                <div className="displayBox">
                    <header className={styles.newItemsTitle}>
                        <a href="">
                            <p>周一周四 · 新品首发</p>
                            <p>
                                <span>查看全部</span>
                                <span className={styles.niIcon} style={this.icons[2]}></span>
                            </p>
                        </a>
                    </header>
                    <div className={styles.newGoodsGrid}>
                        <ul>
                            <li><a href="">
                                <div className={styles.wrapGoodsImg}>
                                    <img src="../../assets/images/355456d48b76839b27a4066f8fd201cc.png" alt="goods_img"/>
                                </div>
                                <div className={styles.wrapGoodsTips}>
                                    <span className={styles.gradientPrice}>加价购</span>
                                </div>
                                <p className={`${styles.giName} oneLine`}>24寸 纯PC“铝框”（非全铝）拉杆箱</p>
                                <p className={`${styles.giDescrip} oneLine`}>71升容量升级，灵活出行</p>
                                <p className={styles.giPrice}>￥389</p>
                            </a></li>
                            <li><a href="">
                                <div className={styles.wrapGoodsImg}>
                                    <img src="../../assets/images/aeabba5efb754cefca20ec25e4e2b48a.png" alt="goods_img"/>
                                </div>
                                <div className={styles.wrapGoodsTips}>
                                    <span className={styles.gradientPrice}>加价购</span>
                                    <span className={styles.anniversary}>爆款</span>
                                </div>
                                <p className={`${styles.giName} oneLine`}>24寸 纯PC“铝框”（非全铝）拉杆箱</p>
                                <p className={`${styles.giDescrip} oneLine`}>71升容量升级，灵活出行</p>
                                <p className={styles.giPrice}>￥389</p>
                            </a></li>
                            <li><a href="">
                                <div className={styles.wrapGoodsImg}>
                                    <img src="../../assets/images/ad491fb41d3c63eed6713e2dd5343fe2.png" alt="goods_img"/>
                                </div>
                                <div className={styles.wrapGoodsTips}>
                                    <span className={styles.gradientPrice}>加价购</span>
                                </div>
                                <p className={`${styles.giName} oneLine`}>24寸 纯PC“铝框”（非全铝）拉杆箱</p>
                                <p className={`${styles.giDescrip} oneLine`}>71升容量升级，灵活出行</p>
                                <p className={styles.giPrice}>￥389</p>
                            </a></li>
                            <li><a href="">
                                <div className={styles.wrapGoodsImg}>
                                    <img src="../../assets/images/ad953e16ad8c33b714e7af941ce8cd56.png" alt="goods_img"/>
                                </div>
                                <div className={styles.wrapGoodsTips}>
                                    <span className={styles.gradientPrice}>加价购</span>
                                </div>
                                <p className={`${styles.giName} oneLine`}>24寸 纯PC“铝框”（非全铝）拉杆箱</p>
                                <p className={`${styles.giDescrip} oneLine`}>71升容量升级，灵活出行</p>
                                <p className={styles.giPrice}>￥389</p>
                            </a></li>
                            <li><a href="">
                                <div className={styles.wrapGoodsImg}>
                                    <img src="../../assets/images/83779a04b7408f32f563c9f10f98e455.png" alt="goods_img"/>
                                </div>
                                <div className={styles.wrapGoodsTips}>
                                    <span className={styles.gradientPrice}>加价购</span>
                                </div>
                                <p className={`${styles.giName} oneLine`}>24寸 纯PC“铝框”（非全铝）拉杆箱</p>
                                <p className={`${styles.giDescrip} oneLine`}>71升容量升级，灵活出行</p>
                                <p className={styles.giPrice}>￥389</p>
                            </a></li>
                            <li><a href="">
                                <div className={styles.wrapGoodsImg}>
                                    <img src="../../assets/images/52656f482f9305495bd084f3e5132f18.png" alt="goods_img"/>
                                </div>
                                <div className={styles.wrapGoodsTips}>
                                    <span className={styles.gradientPrice}>加价购</span>
                                </div>
                                <p className={`${styles.giName} oneLine`}>24寸 纯PC“铝框”（非全铝）拉杆箱</p>
                                <p className={`${styles.giDescrip} oneLine`}>71升容量升级，灵活出行</p>
                                <p className={styles.giPrice}>￥389</p>
                            </a></li>
                            <li className={styles.more}><a href="">
                                <span>查看全部</span>
                            </a></li>
                        </ul>
                    </div>
                </div>
                <div className="displayBox">
                    <header className={`${styles.newItemsTitle} ${styles.popularItemList}`}>
                        <a href="">
                            <p>人气推荐 · 好物精选</p>
                            <p>
                                <span>查看全部</span>
                                <span className={styles.niIcon} style={this.icons[2]}></span>
                            </p>
                        </a>
                    </header>
                    <div className={styles.newGoodsGrid}>
                        <ul>
                            <li><a href="">
                                <div className={styles.wrapGoodsImg}>
                                    <img src="../../assets/images/355456d48b76839b27a4066f8fd201cc.png" alt="goods_img"/>
                                </div>
                                <div className={styles.wrapGoodsTips}>
                                    <span className={styles.gradientPrice}>加价购</span>
                                </div>
                                <p className={`${styles.giName} oneLine`}>24寸 纯PC“铝框”（非全铝）拉杆箱</p>
                                <p className={`${styles.giDescrip} oneLine`}>71升容量升级，灵活出行</p>
                                <p className={styles.giPrice}>￥389</p>
                            </a></li>
                            <li><a href="">
                                <div className={styles.wrapGoodsImg}>
                                    <img src="../../assets/images/aeabba5efb754cefca20ec25e4e2b48a.png" alt="goods_img"/>
                                </div>
                                <div className={styles.wrapGoodsTips}>
                                    <span className={styles.gradientPrice}>加价购</span>
                                    <span className={styles.anniversary}>爆款</span>
                                </div>
                                <p className={`${styles.giName} oneLine`}>24寸 纯PC“铝框”（非全铝）拉杆箱</p>
                                <p className={`${styles.giDescrip} oneLine`}>71升容量升级，灵活出行</p>
                                <p className={styles.giPrice}>￥389</p>
                            </a></li>
                            <li><a href="">
                                <div className={styles.wrapGoodsImg}>
                                    <img src="../../assets/images/ad491fb41d3c63eed6713e2dd5343fe2.png" alt="goods_img"/>
                                </div>
                                <div className={styles.wrapGoodsTips}>
                                    <span className={styles.gradientPrice}>加价购</span>
                                </div>
                                <p className={`${styles.giName} oneLine`}>24寸 纯PC“铝框”（非全铝）拉杆箱</p>
                                <p className={`${styles.giDescrip} oneLine`}>71升容量升级，灵活出行</p>
                                <p className={styles.giPrice}>￥389</p>
                            </a></li>
                            <li><a href="">
                                <div className={styles.wrapGoodsImg}>
                                    <img src="../../assets/images/ad953e16ad8c33b714e7af941ce8cd56.png" alt="goods_img"/>
                                </div>
                                <div className={styles.wrapGoodsTips}>
                                    <span className={styles.gradientPrice}>加价购</span>
                                </div>
                                <p className={`${styles.giName} oneLine`}>24寸 纯PC“铝框”（非全铝）拉杆箱</p>
                                <p className={`${styles.giDescrip} oneLine`}>71升容量升级，灵活出行</p>
                                <p className={styles.giPrice}>￥389</p>
                            </a></li>
                            <li><a href="">
                                <div className={styles.wrapGoodsImg}>
                                    <img src="../../assets/images/83779a04b7408f32f563c9f10f98e455.png" alt="goods_img"/>
                                </div>
                                <div className={styles.wrapGoodsTips}>
                                    <span className={styles.gradientPrice}>加价购</span>
                                </div>
                                <p className={`${styles.giName} oneLine`}>24寸 纯PC“铝框”（非全铝）拉杆箱</p>
                                <p className={`${styles.giDescrip} oneLine`}>71升容量升级，灵活出行</p>
                                <p className={styles.giPrice}>￥389</p>
                            </a></li>
                            <li><a href="">
                                <div className={styles.wrapGoodsImg}>
                                    <img src="../../assets/images/52656f482f9305495bd084f3e5132f18.png" alt="goods_img"/>
                                </div>
                                <div className={styles.wrapGoodsTips}>
                                    <span className={styles.gradientPrice}>加价购</span>
                                </div>
                                <p className={`${styles.giName} oneLine`}>24寸 纯PC“铝框”（非全铝）拉杆箱</p>
                                <p className={`${styles.giDescrip} oneLine`}>71升容量升级，灵活出行</p>
                                <p className={styles.giPrice}>￥389</p>
                            </a></li>
                            <li className={styles.more}><a href="">
                                <span>查看全部</span>
                            </a></li>
                        </ul>
                    </div>
                </div>
                <div className={`displayBox ${styles.limitedTime}`}>
                    <a href="">
                        <div className={styles.leftItem}>
                            <h5>严选限时购</h5>
                            <p className={styles.countdown}>
                                <span className={styles.hours}>{this.state.countDown.h}</span>
                                <span className={styles.colon}>:</span>
                                <span className={styles.mins}>{this.state.countDown.m}</span>
                                <span className={styles.colon}>:</span>
                                <span className={styles.secs}>{this.state.countDown.s}</span>
                            </p>
                            <p className={styles.nextTip}>下一场 18:00 开始</p>
                        </div>
                        <div className={styles.rightItem}>
                            <img src="../../assets/images/89174bb7de913efb39605c74a6374e38.png" alt="goodsImg"/>
                            <div className={styles.price}>
                                <p>¥179</p>
                                <p>¥239</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className={`displayBox ${styles.welfare}`}>
                    <a href="" style={this.bgPic[0]}></a>
                </div>
                <div className="displayBox">
                    <h3 className={styles.listTitle}>居家好物</h3>
                    <div className={styles.goodsGrid}>
                        <ul className="clearfix">
                            <li><a href="">
                                <div className={styles.wrapGoodsImg}>
                                    <img src="../../assets/images/480abaed735b79e1768fd9878ef76cc4.png" alt=""/>
                                    <p className={styles.specification}>2色可选</p>
                                </div>
                                <div className={`${styles.desc} oneLine`}>双层子母被，四季皆可使用</div>
                                <p className={`${styles.giName} oneLine`}>升级款双宫茧桑蚕丝被 子母被</p>
                                <p className={styles.giPrice}>¥1399</p>
                            </a></li>
                            <li><a href="">
                                <div className={styles.wrapGoodsImg}>
                                    <img src="../../assets/images/83779a04b7408f32f563c9f10f98e455.png" alt=""/>
                                </div>
                                <div className={`${styles.desc} oneLine`}>定位高端,国际顶级品牌代工厂</div>
                                <div className={styles.wrapGoodsTips}>
                                    <span className={styles.gradientPrice}>加价购</span>
                                </div>
                                <p className={`${styles.giName} oneLine`}>艾米 真皮沙发</p>
                                <p className={styles.giPrice}>¥6999</p>
                            </a></li>
                            <li><a href="">
                                <div className={styles.wrapGoodsImg}>
                                    <img src="../../assets/images/52656f482f9305495bd084f3e5132f18.png" alt=""/>
                                </div>
                                <div className={`${styles.desc} oneLine`}>95%白鹅绒+双宫茧桑蚕丝，保暖保湿二合一</div>
                                <div className={styles.wrapGoodsTips}>
                                    <span className={styles.gradientPrice}>满赠</span>
                                    <span className={styles.anniversary}>爆款</span>
                                </div>
                                <p className={`${styles.giName} oneLine`}>保暖嫩肤蚕丝羽绒子母被</p>
                                <p className={styles.giPrice}>¥1999</p>
                            </a></li>
                            <li className={`${styles.more}`} ><a href="">
                                <p>更多居家好物</p>
                                <span style={this.icons[3]} className="icon"></span>
                            </a></li>
                        </ul>
                    </div>
                </div>
                <div className={styles.backTop}></div>
                <div className={styles.wapNewUserEntry}></div>
            </div>
        )
    }
}