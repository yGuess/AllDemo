/**
 * Created by ºÆ on 2016/8/6.
 */
window.onload = function(){

    // index.html ÂÖ²¥
    banner_change();
};
function banner_change(){
    var bannerList  = document.querySelector('.bannerContent').children;
    //console.log(bannerList);
    var newObj = {
        self: this,
        currentIndex: 0,
        _setInterval: null,
        opacityTo0: function(obj){
            obj.style.animation = 'hidden 2s';
            obj.style.display = 'none';
        },
        opacityChange: function(objArr,index,next){
            setTimeout(function(){
                objArr[next].style.zIndex = '10';
                objArr[index].style.zIndex = '9';

                objArr[index].style.display = 'none';

            },1500);

            objArr[next].style.display = 'block';
            objArr[index].style.opacity = '0';
            objArr[next].style.opacity = '1';
        },
        _loop: function(objArr){
            var _idArr = [];
            var len = objArr.length;

            for(var i=len-1 ; i>=0 ; i--){
                _idArr[i] = objArr[i].getAttribute('data-bId');
            }
            i = null;

            newObj._setInterval = window.setInterval(function(){
                newObj.opacityChange(objArr,newObj.currentIndex,(newObj.currentIndex+1)%len);
                //newObj.opacityTo0(objArr[newObj.currentIndex%len]);
                newObj.currentIndex = (newObj.currentIndex+1)%len;
            },6000);
        },
        clickDpt: function(index){
            //console.log(this === window);
            clearInterval(this._setInterval);
            //this.opacityTo0(bannerList[this.currentIndex%bannerList.length]);
            //this.opacityTo1(bannerList[index%bannerList.length]);
            this.currentIndex = index;
            this._loop(bannerList);
        }
    };
    newObj._loop(bannerList);
}
