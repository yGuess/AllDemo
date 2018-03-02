import React from 'react'
import styles from './Slider.css'

/*
 * 轮播组件
 * @prototype slideItemsData 每一组的所需数据
 */ 

export default class Slider extends React.Component{
    constructor(){
        super()
        // 初始化轮播节点(第一个节点为最后一张图，最后节点为第一张图，共imgs.length+2个节点)
        const w = document.body.clientWidth || document.documentElement.clientWidth
     
        this.imgs = []
        this.timerInfo = {
            func: '',
            delay: 10000,
            slideItemWidth: w,
            pos: 1,
            spotPos: 0,
            isSpots: true,
            initTouchPos: {
                x: 0
            },
            transformDistance: 0,
            minMove: 50,
        }
        this.state = {
            translate: {
                transform: `translate3d(${-w}px, 0px, 0px)`,
                transitionDuration: '300ms'
            }
        }

        this.timerOperate = this.timerOperate.bind(this)
        this.bindTouchStart = this.bindTouchStart.bind(this)
        this.bindTouchMove = this.bindTouchMove.bind(this)
        this.bindTouchEnd = this.bindTouchEnd.bind(this)
        this.resetSpotPos = this.resetSpotPos.bind(this)
    }

    timerOperate(){
        let newPos = ++this.timerInfo.pos, 
        newLeft = -newPos * this.timerInfo.slideItemWidth

        this.slider.style.transitionDuration = '300ms'
        this.slider.style.transform = `translate3d(${newLeft}px,0,0)`
        this.resetSpotPos()

        if(this.timerInfo.pos == this.items.length-1){
            setTimeout(() => {
                this.timerInfo.pos = 1

                this.slider.style.transitionDuration = '0ms'
                this.slider.style.transform = `translate3d(${-this.timerInfo.slideItemWidth}px, 0, 0)`
            },300)
        }

        this.timerInfo.func = setTimeout(this.timerOperate,this.timerInfo.delay)  
    }
    resetSpotPos(){
        let pos = this.timerInfo.pos
        if(pos == 0) this.timerInfo.spotPos = this.imgs.length-1
        else if(pos == this.items.length-1) this.timerInfo.spotPos = 0
        else this.timerInfo.spotPos = pos-1
    }
    bindTouchStart(evt){
        clearTimeout(this.timerInfo.func)
        this.timerInfo.initTouchPos = {
            x: evt.touches[0].pageX
        }
        this.slider.style.transitionDuration = '0ms'
    }
    bindTouchMove(evt){
        evt.preventDefault()

        let newX = evt.touches[0].pageX,
            dis = this.timerInfo.initTouchPos.x - newX,
            newTransformX = -this.timerInfo.pos*this.timerInfo.slideItemWidth - dis 
        
        this.timerInfo.transformDistance = dis

        this.slider.style.transform = `translate3d(${newTransformX}px,0,0)`
    }
    bindTouchEnd(){
        // 拖动距离小，则还原位置
        let dis = this.timerInfo.transformDistance
        
        if(Math.abs(dis) > this.timerInfo.minMove){
            dis > 0 ? this.timerInfo.pos++ : this.timerInfo.pos--;
        }

        this.slider.style.transitionDuration = '100ms'
        this.slider.style.transform = `translate3d(${-this.timerInfo.slideItemWidth*this.timerInfo.pos}px,0,0)`
        this.resetSpotPos()
        
        setTimeout(() => {
            this.timerInfo.initTouchPos = { x: 0, y:0 }
            this.timerInfo.transformDistance = 0

            // 初始位置和末尾位置时，在动画完成后要切换到最后或开头
            if(this.timerInfo.pos == 0){
                this.timerInfo.pos = this.items.length - 2
            }else if(this.timerInfo.pos == this.items.length-1){
                this.timerInfo.pos = 1
            }
            
            this.slider.style.transitionDuration = '0ms'
            this.slider.style.transform = `translate3d(${-this.timerInfo.slideItemWidth*this.timerInfo.pos}px,0,0)`
            this.timerInfo.func = setTimeout(this.timerOperate , this.timerInfo.delay)
        
        }, 200)
    }
    
    componentWillUnmount(){
        clearTimeout(this.timerInfo.func)
    }
    componentDidMount(){
        // 处理轮播图
        this.imgs = this.props.slideImgs
        this.items = this.imgs.map((ele,index) => {
            return <li key={index}><img src={ele} alt="slide-img"/></li>
        })
        this.items.unshift(<li><img src={this.imgs[this.imgs.length-1]} alt="slide-img"/></li>)
        this.items.push(<li><img src={this.imgs[0]} alt="slide-img"/></li>)

        // 轮播数组
        this.timerInfo.func = setTimeout(this.timerOperate,this.timerInfo.delay)    
        
        // 轮播图拖动的侦听
        this.slider.addEventListener('touchstart' , this.bindTouchStart)
        this.slider.addEventListener('touchmove' , this.bindTouchMove)
        this.slider.addEventListener('touchend' , this.bindTouchEnd)
    }

    render(){
        return(
            <div className={styles.exploreBanners}>
                <ol className={styles.eBannerItems}>
                    {
                        this.imgs.map((ele,index) => {
                            return (<li>
                                        <a style={this.banner.bgImgs[0]} className={styles.active} href="">
                                            <div className={styles.ctx} >
                                                <p className={styles.title}>每满99立减15</p>
                                                <p className={styles.desc}>今年过年送什么？</p>
                                                <p className={styles.desc}>严选来支招了</p>
                                            </div>
                                        </a>
                                    </li>)
                        })
                    }
                </ol>
            </div>
        )
    }
}