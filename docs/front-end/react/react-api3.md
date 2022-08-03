---
title: React API（Hook）
excerpt: Hook是React 16.8的新增特性，它可以让你在不编写class的情况下使用state以及其他的React特性。
index_img: https://little_lu.gitee.io/images/blog/react/react-api3.jpg
banner_img: https://little_lu.gitee.io/images/blog/react/react-api3.jpg
tags: [React, API, 学习笔记]
categories: React学习笔记
date: 2021-09-25 10:00:00
---

# React API（Hooks）

`Hook` 是 `React 16.8` 的新增特性，它可以让你在不编写 `class` 的情况下使用 `state` 以及其他的 `React` 特性。

<img src="https://little_lu.gitee.io/images/blog/react/react-api/hooks.png" width="700px">

## useState
每一个 `Hook` 都是 `useXXX` 的格式，`useState` 就是一个 `Hook`，它会给函数组件添加一些内部 `state`，`React` 在重复渲染的时候会保留这些 `state`。`useState` 接收一个参数作为初始值，以数组形式返回当前状态和更新它的函数，当初始值需要通过复杂计算获得时，可传入一个函数，在函数中返回初始值，该函数只会在初始渲染的时候被调用。

```js
const Counter = (props) => {

  // 声明一个 state变量 count，初始值为 0  
  const [count, setCount] = useState(0)

  // 声明一个 state变量 num，初始值为 props.num 翻转后的值
  const [num, setNum] = useState(() => {
      let { num } = props
      return parseInt((num + '').split('').reverse().join(''))
  })

  return (
    <div>
      <p> count: {count} </p>
      <p> num: {num} </p>
      {/* 调用 setCount 方法改变 count 的值 */}
      <button onClick={() => setCount(count + 1)}> add Count </button>
      <button onClick={() => setNum(num + 1)}> add Num </button>
    </div>
  )
}

const Index = () => {
    return ( <Counter num={123} /> )
}
```

## useEffect
`useEffect` 弥补了函数组件没有生命周期的缺点。我们可以在 `useEffect` 第一个参数回调函数中，做一些请求数据，事件监听等操作，第二个参数作为依赖项，当依赖项发生变化，重新执行第一个函数。

```js
const Counter = () => {
  
    const [count, setCount] = useState(0)
    const [num, setNum] = useState(0)

    useEffect(() => {
        // 我们可以在这里做一些初始化操作，请求数据或操作 dom
        console.log('初始化，相当于 componentDidMount')

        // 在这里清除定时器、事件监听等副作用
        return () => console.log('销毁，相当 componentDidUnmount')
    })

    useEffect(() => {
        // 只有当依赖发生变化才会执行
        console.log('相当于componentDidUpdate')
        console.log(`count改变了：${count}`)
    }, [count])

    return (
        <div>
        <p> count: {count} </p>
        <p> num: {num} </p>
        <button onClick={() => setCount(count + 1)}> add Count </button>
        <button onClick={() => setNum(num + 1)}> add Num </button>
        </div>
    )
}
```

`useEffect` 和 `useState` 一样都可以在组件中多次使用，你可以将不同逻辑拆分开来写在不同的 `useEffect` 里面。

## useMemo
`useMemo` 接受两个参数，第一个是一个函数，返回值会被缓存，第二个参数是一个依赖项数组，只有当数组里的依赖项发生变化时，才会执行第一个函数更新值，如未提供依赖项数组，`useMemo` 会在每次渲染时都执行第一个函数更新值。

```js
const Counter = (props) => {

    const [count, setCount] = useState(0)
    const [total, setTotal] = useState(() => props.num)

    const num = useMemo(() => {
        console.log('num 值更新')
        return props.num + count
    }, [props.num, count]) // 只有当 props.num 或 count 的值变化时，才会重新计算 num 的值

    return (
        <div>
            <p> count: {count} </p>
            <p> total: {total} </p>
            <p> num: {num} </p>
            
            <button onClick={() => setCount(count + 1)}> add Count </button>
            <button onClick={() => setTotal(total + 1)}> add Count </button>
        </div>
    )
}

const Index = () => {
    return ( <Counter num={123} /> )
}
```

## useCallback
`useCallback` 和 `useMemo` 接收的参数一样，作用也都是用来缓存数据；不同的是 `useMemo` 缓存的是第一个函数执行后返回的值，`useCallback` 缓存的是第一个函数。`useCallback` 返回的函数可以作为 `props` 属性传递给子组件，搭配 `memo` 使用可以避免子组件不必要的重渲染。

```js
// 用 React.memo 包裹子组件
const Money = React.memo((props) => {
    console.log('资产更新了')

    return (
        <div>我的资产：{props.myMoney()} </div>
    )
})

const Index = () => {

    const [count, setCount] = useState(0)
    const [money, setMoney] = useState(100)

    const myMoney = useCallback(() => {
        return <span style={{ color: 'red', fontWeight: 'bold' }}>{money}</span>
        // 只有 money 的值发生变化，myMoney 的引用才会更新，子组件才会重新渲染
    }, [money])

    return (
        <div>
            <p> count: {count} </p>
            <p> money: {money} </p>

            <button onClick={() => setCount(count + 1)}> add Count </button>
            <button onClick={() => setMoney(money + 50)}> add Money </button>

            <Money myMoney={myMoney} />
        </div>
    )
}
```

## useRef
`useRef` 返回一个可变的 `ref` 对象，其 `current` 属性值为初始化传入的参数，返回的 `ref` 对象在组件的整个生命周期内持续存在。我们可以用它来获取 `dom` 元素或组件实例，也可以用它来保存一些数据。

```js
const FocusInput = () => {

    const inputEl = useRef<HTMLInputElement>(null)

    const focusInput = useCallback(() => {
        console.log(inputEl)
        inputEl.current?.focus()
    }, [inputEl])

    return (
        <>
            <input ref={inputEl} />
            <button onClick={focusInput}>聚焦</button>
        </>
    )

}
```

## useContext
用 `createContext` 创建的 `context` 对象的值，除了能用 `Consumer` 接收外，还可以用 `useContext` 接收。`useContext` 接收一个 `context` 对象作为参数，并返回改对象当前值，当前值由上层组件中距离当前组件最近的 `Provider` 的 `value` 属性决定。当 `context` 的值发生更新时，该 `Hook` 会触发重渲染。

```js
const MyContext = React.createContext<any>(null)

const ConsumerComponent = () => {
    return (
        <MyContext.Consumer>
            { value => <div>name: { value.name }</div> }
        </MyContext.Consumer>
    )
}

const UseContext = () => {
    const value = useContext(MyContext)
    return ( <div>name: { value.name }</div> )
}

const ProviderComponent = () => {
    return (
        <MyContext.Provider value={{ name: 'cgw' }}>
            <ConsumerComponent />
            <UseContext />
        </MyContext.Provider>
    )
}
```

## useReducer
`useReducer` 的使用方法类似于 `Redux`，它接收两个参数，第一个参数是形如 `(state, action) => newState` 的 `reducer`函数，第二个参数是 `state` 的初始值，返回一个数组，第一项是 `state` 的值，第二项是派发更新的 `dispatch` 函数。
```js
const MyContext = React.createContext<any>(null)

const UseContext = () => {
    /* 通过useContext获取dispatch函数 */
    const { dispatchCount } = useContext(MyContext)
    return ( 
        <>
            <button onClick={() => dispatchCount({ type: 'increment' })}>+1</button><br />
            <button onClick={() => dispatchCount({ type: 'decrement' })}>-1</button>
        </> 
    )
}

const Children = () => {
    return <UseContext />
}

const UseReducer = () => {

    const inpEl = useRef<HTMLInputElement>(null)
    /* count接收state的值， dispatchCount 为派发函数 */
    const [count, dispatchCount] = useReducer((state: number, action: any) => {
        const { type, payload } = action
        switch (type) {
            case 'increment':
                return state + 1
            case 'decrement':
                return state - 1
            case 'reset':
                return payload
            default:
                throw new Error()
        }
    }, 0)

    return (
        <>
            <div>Count: {count}</div>
            <button onClick={() => dispatchCount({ type: 'increment' })}>+1</button><br />
            <button onClick={() => dispatchCount({ type: 'decrement' })}>-1</button>
            <div>
                <input ref={inpEl} type="number" defaultValue={0} />
                <button
                    onClick={() =>
                        dispatchCount({ type: 'reset', payload: parseInt(inpEl.current?.value || '0') })
                }>
                    赋值
                </button>
            </div>
            <MyContext.Provider value={{ dispatchCount }}>
                <Children />
            </MyContext.Provider>
        </>
    )
}
```

`useReducer` 在某些场景下比 `useState` 更适用，例如 `state` 逻辑比较复杂且包含多个值，依赖之前的 `state` 等。
我们还可以通过 `context` 的方式将 `dispatch` 函数传递给子组件，这样避免了在组件树的每一层手动传递，而且在任意子节点都能通过 `useContext` 获取到 `dispatch` 函数。


## useLayoutEffect
`useLayoutEffect` 的使用方法和 `useEffect` 差不多，只是执行时机不同：
`useEffect`：组件更新挂载完成 -> 浏览器 `dom` 绘制完成 -> 执行 `useEffect` 回调
`useLayoutEffect`：组件更新挂载完成 -> 执行 `useLayoutEffect` 回调 -> 浏览器 `dom` 绘制完成

`useLayoutEffect` 可能会阻塞浏览器的绘制，应尽可能使用标准的 `useEffect` 以避免阻塞视觉更新。
```js
const UseLayoutEffect = () => {

    const inplEl = useRef<HTMLInputElement>(null)

    useLayoutEffect(() => {
        /** 在dom绘制前，给输入框赋上初始值 */
        inplEl.current?.setAttribute('value', '初始值')
    }, [])

    return ( <input ref={inplEl} type="text" /> )

}
```

## useImperativeHandle
`useImperativeHandle` 可以配合 `forwardRef` 自定义子组件暴露给父组件的 `ref` 的实例值。`useImperativeHandle` 接受三个参数：
* 第一个参数为 `ref` 对象
* 第二个参数为函数，返回值作为 `ref` 的实例值暴露给父组件
* 第三个参数为依赖性数组

```js
interface InputInstance {
    onFocus: () => void
    onChangeValue: (val: string) => void
}

const Input = forwardRef((props, ref) => {

    const inplEl = useRef<HTMLInputElement>(null)
    const [value, setValue] = useState('')

    const onChangeValue = (val: string) => setValue(val)

    useImperativeHandle(ref, () => {
        const handleRefs = {
            // 声明聚焦input框的方法
            onFocus() {
                inplEl.current?.focus()
            },
            // 声明改变input值的方法
            onChangeValue
        }
        return handleRefs
    })

    return (
        <div>
            <input ref={inplEl} type="text" value={value} onChange={e => onChangeValue(e.target.value)} />
        </div>
    )
})

const Index = () => {

    const ref = useRef<InputInstance>(null)

    const handleClick = () => {
        ref.current?.onFocus()
        ref.current?.onChangeValue('默认值')
    }

    return (
        <>
            <Input ref={ref} />
            <button onClick={handleClick}>聚焦并改变值</button>
        </>
    )
}
```

## useDebugValue
`useDebugValue` 用于在 `React` 开发者工具中显示自定义 `hook` 的标签

```js
const useFriendStatus = (status: boolean) => {
    const [isOnline] = useState(status);
    // 在开发者工具中的这个 Hook 旁边显示标签
    // e.g. "FriendStatus: Online"
    useDebugValue(isOnline ? 'Online' : 'Offline');
    return isOnline;
}

const Index = () => {
    const online = useFriendStatus(true)
    const offline = useFriendStatus(false)
    return (
        <>
            <div>Tom{online ? '在线' : '不在线'}</div>
            <div>John{offline ? '在线' : '不在线'}</div>
        </>
    )
}
```

<img src="https://little_lu.gitee.io/images/blog/react/react-api/debug.png" width="1000px">
