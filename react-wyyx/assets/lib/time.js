/*
 *  返回当前时间(格式: YYYY-MM-DD hh:mm:ss ms)
 *  @params currentTime 当前时间.若存在按格式返回指定时间，反之返回当前时间
 */
function getTime(currentTime){
    let date = currentTime ? new Date(t) : new Date(),
        Y = date.getFullYear(),
        M = date.getMonth()+1,
        D = date.getDate(),
        h = date.getHours(),
        m = date.getMinutes(),
        s = date.getSeconds(),
        ms = date.getMilliseconds()
    
    M < 10 ? M='0'+M : ''
    D < 10 ? D='0'+D : ''
    h < 10 ? h='0'+h : ''
    m < 10 ? m='0'+m : ''
    s < 10 ? s='0'+s : ''

    return `${Y}-${M}-${D} ${h}:${m}:${s} ${ms}`
}


export default {
    getTime
}