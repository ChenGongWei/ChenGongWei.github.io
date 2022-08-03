---
title: React API（DOM）
excerpt: 本章复习React API的最后的DOM部分，react-dom提供了可在应用顶层使用的DOM方法，这些方法可用于React模型以外的地方。不过一般情况下，大部分组件都不需要使用这个模块。
index_img: https://little_lu.gitee.io/images/blog/react/react-api4.jpg
banner_img: https://little_lu.gitee.io/images/blog/react/react-api4.jpg
tags: [React, API, 学习笔记]
categories: React学习笔记
date: 2021-09-30 10:00:00
---

# React API（DOM）

最后是 `React-dom` 部分比较重要的 `api`

<img src="https://little_lu.gitee.io/images/blog/react/react-api/dom.png" width="700px">

## render
```js
ReactDOM.render(element, container[, callback])
```

`render` 的作用是在提供的容器里渲染一个 `React` 元素，一般我们都用它来渲染根部容器 `app`，接收三个参数：
* `element`：需要渲染的 `React` 元素
* `container`：容器节点，`element` 会被渲染在其内部，覆盖原有内容
* `callback`：可选的回调函数，会在组件被渲染或更新之后被执行

`render` 会控制传入容器节点里的内容，但不会修改容器节点。

```js
const Text = () => {
    return (
        <div>我是render文本</div>
    )
}

const Index = () => {

    const ref = useRef<HTMLDivElement>(null)

    const handleClick = () => {
        ReactDOM.render(<Text />, ref.current)
    }

    return (
        <>
            <div ref={ref}>我是原文本</div>
            <button onClick={handleClick}>render</button>
        </>
    )
}
```

## hydrate
```js
ReactDOM.hydrate(element, container[, callback])
```

`hydrate` 作用和 `render` 相同，区别是 `hydrate` 是用于服务端渲染的，在 `ReactDOMServer` 渲染的容器中对 `HTML` 的内容进行 `hydrate` 操作。

## createPortal
```js
ReactDOM.createPortal(child, container)
```

`createPortal` 提供了一种将子节点渲染到存在于父组件以外的 `DOM` 节点的优秀的方案。

通常情况下，组件都是被挂载在最近的父节点上，但有时我们会需要将子组件能够在视觉上“跳出”父容器，挂载在其他位置，例如 对话框、悬浮卡机提示框等，避免父组件的样式影响到该节点。

`createPortal` 接收两个参数，第一个参数 `child` 是任何可渲染的 `React` 子元素，例如一个元素，字符串或 `fragment`；第二个参数 `container` 是一个 `DOM` 元素。

```js
interface ModalProps {
    visible: boolean
    onClose: () => void
}

const Modal = (props: ModalProps) => {

    const [visible, setVisible] = useState(false)

    const onClose = () => {
        setVisible(false)
        props.onClose()
    }

    useEffect(() => {
        setVisible(props.visible)
    }, [props.visible])

    return (
        <>
            {/* 通过 React.createPortal 将组件挂载在 body 下 */}
            {visible ? ReactDOM.createPortal(
                <div className={style.modal}>
                    <div className={style.wrap}>
                        <div>我是弹框组件，挂载在body下</div>
                        <div className={style.btn} onClick={onClose}>关闭</div>
                    </div>
                </div>
            , document.body) : null}
        </>
    )
}

const Index = () => {

    const [visible, setVisible] = useState(false)

    return (
        <>
            <h1>我是标题</h1>
            <button onClick={() => setVisible(true)}>弹框</button>
            <Modal visible={visible} onClose={() => setVisible(false)} />
        </>
    )
}
```

## findDOMNode
```js
ReactDOM.findDOMNode(component)
```

`findDOMNode` 是用来访问组件 `DOM` 节点的，推荐使用 `ref` 模式，严格模式下 `findDOMNode` 已被弃用。

`findDOMNode` 只在已挂载组件上可用，调用未挂载的组件将会引起异常；不能用于函数组件。

```js
class Index extends React.Component {
    componentDidMount() {
        console.log(ReactDOM.findDOMNode(this))
    }

    render() {
        return (
            <div>hello, world</div>
        )
    }
}
```

## flushSync
`react` 会为更新任务设定不同的优先级，而`flushSync` 可以将回调函数里的更新任务放在一个较高优先级中

```js
const Index = () => {

    const [state, setState] = useState(0)

    const handerClick = () => {
        
        setTimeout(() => {
            setState(1)
        })

        setState(2)

        ReactDOM.flushSync(() => {
            setState(3)
        })

        setState(4)
    }

    // 首先打印 0
    // 点击按钮后依次打印 3 4 1
    console.log(state)

    return (
        <div>
            <div>{state}</div>
            <button onClick={handerClick} >测试flushSync</button>
        </div>
    )

}
```
点击按钮后依次打印 `3 4 1`，原因是 `flushSync` 将 `3` 的更新任务优先级提高了，所以最先打印；`2` 和 `4` 被批量更新了，所以只打印了 `4`；最后打印的是定时器的 `1`。


## unstable_batchedUpdates
当一个异步操作之后需要 `setState` 多次时，组件会重新渲染多次，显然这不是我们想要的结果，而 `unstable_batchedUpdates` 就能解决这个问题，它可以将多个 `setState` 合并处理。

```js
const Index = () => {
    const [num, setNum] = useState(1)
    const [str, setStr] = useState('a')

    const clickHandler = () => {
        // 会触发两次打印
        setTimeout(() => { // 模拟异步
            setNum(2) 
            setStr('c')
        }, 1000)
    }

    const clickHandler2 = () => {
        setTimeout(() => { // 模拟异步
            // 合并更新，只触发一次打印
            ReactDOM.unstable_batchedUpdates(() => {
                setNum(2) 
                setStr('c')
            })
        }, 1000)
    }

    console.log('render'); // 初始化时log一次，clickHandler触发后log两次。

    return (
        <div>
            <div>num：{num}</div>
            <div>str：{str}</div>
            <button onClick={clickHandler}>异步更新</button>
            <button onClick={clickHandler2}>合并更新</button>
        </div>
    );
}
```
**注意**
  1. `unstable_batchedUpdates` 是一个同步操作
  ```js
    let tmp = 1
    ReactDOM.unstable_batchedUpdates(() => {
        setNum(2)
        setStr('c')
        tmp = 3
    })
    console.log(tmp) // 3
  ```
  2. 如果多个 `setState` 不是在异步操作里，则不需要 `unstable_batchedUpdates`
  ```js
    const clickHandler = () => {
        // setTimeout(() => { // 如果setState之前没有异步操作，则不需要unstable_batchedUpdates
        //  ReactDOM.unstable_batchedUpdates(() => { 
            // 这里的两个setState也会合并执行一次，react内部会自动处理。
            // 但如果有异步，react无法侦测异步。所以需要自己加unstable_batchedUpdates。
            setNum(2); 
            setStr('c');
        // });
        // }, 1000);
    }
  ```

## unmountComponentAtNode
```js
ReactDOM.unmountComponentAtNode(container)
```

从 `DOM` 中卸载组件，会将其事件处理器`（event handlers）`和 `state` 一并清除。如果指定容器上没有对应已挂载的组件，这个函数什么也不会做。如果组件被移除将会返回 `true`，如果没有组件可被移除将会返回 `false`。

```js
const Text = () => {
    return (
        <div>我是render文本</div>
    )
}

const Index = () => {

    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        ReactDOM.render(<Text />, ref.current)
    }) 

    const handleRemove = () => {
        ReactDOM.unmountComponentAtNode(ref.current!)
    }

    return (
        <>
            <div ref={ref}></div>
            <button onClick={handleRemove}>remove</button>
        </>
    )
}
```