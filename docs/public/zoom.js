
window.addEventListener('load', () => {
    let timer = null
    /**
     * 通过 medium-zoom 给页面非 a 标签下的 img 添加点击放大事件
     * 文档：https://github.com/francoischalifour/medium-zoom
     */
    function updateZoom() {
        clearTimeout(timer)
        // 延迟绑定
        timer = setTimeout(() => {
            mediumZoom(':not(a) > img', {
                margin: 24,
                background: 'rgba(0, 0, 0, .4)',
                scrollOffset: 0,
            })
        }, 500)
    }
    // 初始化调用
    updateZoom()

    // 监听back/forward/go
    window.addEventListener('popstate', () => {
        // 绑定 img 点击放大事件
        updateZoom()
    })

    /**
     * 因为没有提供 pushState 和 replaceState 的监听事件
     * 所以需要自己重写这两个事件，参考：https://juejin.cn/post/6844903749421367303
     * @param action pushState | replaceState
     * @return Function
     */
    function wrapState(action) {
        // 获取原始定义
        let raw = history[action]
        return function () {

            // 经过包装的 pushState 或 replaceState
            let wrapper = raw.apply(this, arguments)

            // 定义名为 action 的事件
            let e = new Event(action)

            // 将调用 pushState 或 replaceState 时的参数作为 stateInfo 属性放到事件参数event上
            e.stateInfo = { ...arguments }

            // 调用 pushState 或 replaceState 时触发该事件
            window.dispatchEvent(e)
            return wrapper
        }
    }

    //修改 pushState 事件
    history.pushState = wrapState('pushState')

    // 监听自定义事件
    window.addEventListener('pushState', () => {
        updateZoom()
    })
})