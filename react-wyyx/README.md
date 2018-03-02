## questions

1.组件的挂载被移除(即切换到其他组件后)后，不能再调用该组件，并进行数据更新等操作.
例如：当切换到其他组件后，该组件中的轮播或者倒计时便不可以执行，此时调用setData会报错：
> Can only update a mounted or mounting component. This usually means you called setState() on an unmounted component. This is a no-op. Please check the code for the xxx component."

解决：在生命周期函数componentWillUnmount函数中清除与组件相关的数据更新操作。比如清除定时器



## mark
1.react-router插件使用时，4.x之后直接引入react-router-dom即可(BrowserRouter等组件都包含在其中)