---
title: React API（工具类）
excerpt: 上篇文章复习的是React组件类的API，这次复习的是工具类的，如常用的createElement、createContext、createRef等。
index_img: https://little_lu.gitee.io/images/blog/react/react-api2.jpg
banner_img: https://little_lu.gitee.io/images/blog/react/react-api2.jpg
tags: [React, API, 学习笔记]
categories: React学习笔记
date: 2021-09-09 10:00:00
---

## 工具类
下面要复习的是 `React` 工具类 `API` 的用法：

<img src="https://little_lu.gitee.io/images/blog/react/react-api/tools.png" width="700px">

### createElement
我们现在写 `React` 一般都是用 `JSX` 的格式，而我们写的 `JSX` 最终都会被 `babel` 用 `createElement` 编译成 `React` 元素形式。
例如：
```js
return (
    <div className="box">
        <div className="title">生命周期</div>
        <React.Fragment>Flagment</React.Fragment>
        文本
    </div>
)
```
会被编译成：
```js
return React.createElement("div", { className: "box" },
        React.createElement("div", { className: "title" }, "\u751F\u547D\u5468\u671F"),
        React.createElement(React.Fragment, null, "Flagment"),
        "\u6587\u672C")
```

`createElement` 的使用方法：
```js
React.createElement(
    type,
    [props],
    [...children]
)
```
* 第一个参数是组件类型，可以传入组件名或 `dom` 元素类型
* 第二个参数是一个对象，在 `dom` 类型中为属性，组件类型为 `props`
* 后续参数为 `children` 子元素或子组件
  
### cloneElement
`cloneElement` 顾名思义就是用来克隆元素的，以 `element` 元素为样板克隆并返回新的 `React` 元素，返回元素的 `props` 是将新的 `props` 与原始元素的 `props` 浅层合并后的结果。

```js
function TestComponent(props) {
    return (
        <div>{props.name}</div>
    )
}


function Index() {
    const element = <TestComponent name='test' />
    return (
        <div>
            { element }
            {React.cloneElement(element, { name: 'clone' })}
        </div>
    )
}
```

`cloneElement` 的使用方法：
```js
React.cloneElement(
    element,
    [config],
    [...children]
)
```
* 第一个参数是 `element` 元素
* 第二个参数可以包含 `props`、`key`、`ref`
* 后续参数为 `children` 子元素或子组件
  
### createContext
`createContext` 用于创建一个 `Context` 对象，当 `React` 渲染一个订阅了 `Context` 对象的组件，这个组件会从组件树中离自身最近的 `Provider` 中读取当前的 `Context` 的值，如果没有匹配到 `Provider`，那么就会获取 `defaultValue` 的值。
```js
const MyContext = React.createContext(defaultValue)
```

每个 `Context` 对象都会返回一个 `Provider` 和 `Consumer` 组件。`Provider` 接收一个 `value` 属性并传递给内部的消费组件 `Consumer`；`Consumer` 订阅 `Context` 的变化，当 `Provider` 的 `value` 值变化时会重新渲染。

```js
const MyContext = React.createContext({})

function Test(props) {

    const { name, age } = props

    return (
        <div>
            <div>姓名：{ name }</div>
            <div>年龄：{ age }</div>
        </div>
    )
}

function ConsumerComponent() {
    return (
        <MyContext.Consumer>
            { value => <Test {...value} /> }
        </MyContext.Consumer>
    )
}

function ProviderComponent() {
    return (
        <MyContext.Provider value={{ name: 'cgw', age: 18 }}>
            <ConsumerComponent />
        </MyContext.Provider>
    )
}
```

### createFactory
`createFactory` 用于返回生成制定类型 `React` 元素的函数，作用与 `createElement` 类似，类型参数可以使标签名字符串（像是 `'div'` 或 `'span'`），也可以是 `React` 组件类型，或是 `React Fragment` 类型。

```js
const Test = () => {
    return ( <div>Test</div> )
}

const Index = () => {

    const Text = React.createFactory(() => <div>createFactory创建的div</div>)
    const TestFactory = React.createFactory(Test)

    return (
        <div>
            <Text />
            <TestFactory />
        </div>
    )
}
```

此辅助函数已废弃，建议使用 `JSX` 语法或直接调用 `React.createElement` 来替代它。

### createRef
`createRef` 可以创建一个 `ref` 元素，附加在 `react` 元素上。

```js
class Index extends React.Component {

    node = React.createRef()

    componentDidMount() {
        console.log('createRef：', this.node)
    }

    render() {
        return (<div ref={this.node}> createRef </div>)
    }
}
```

在 `class` 组件中还可以这样获取 `ref`：

```js
class Index extends React.Component {

    node = null

    componentDidMount() {
        console.log('ref：', this.node)
    }

    render() {
        return (<div ref={ref => this.node = ref}> ref </div>)
    }
}
```

在函数组件可以使用 `useRef` 来获取 `ref`：

```js
const Index = () => {

    const node = useRef(null)

    useEffect(() => {
        console.log('useRef：', node)
    }, [node])

    return (<div ref={node}> useRef </div>)
}
```



### isValidElement
验证接收的参数是否为 `React` 元素，返回 `true` 或 `false`。

```js
const Text = () => {
    return ( <div> 我是一个组件 </div> )
}

const IsValidElement = props => {

    // 三段文字都会展示
    // return props.children

    // 非 React元素会被过滤
    const newChildren = props.children.filter((item) => React.isValidElement(item))
    return newChildren

}

const Index = () => {
    return (
        <IsValidElement>
            <div> 我是一个div </div>
            <Text />
            我是一段文本
        </IsValidElement>
    )
}
```

### Children.map
```js
React.Children.map(children, function[(thisArg)])
```
`React.Children` 提供了五个用于处理 `this.props.children` 不透明数据结构的方法，`map` 便是其中一个。
`map` 接受两个参数，第一个参数为节点数组，第二个参数为处理函数，`map` 会为数组中的每一个节点调用该函数，最后返回一个处理后的节点数组。

```js
const Text = () => {
    return ( <div>文本</div> )
}

const WarpComponent = (props) => {
    console.log('props.children: ', props.children)
    return props.children
}

const MapComponent = (props) => {
    const children = React.Children.map(props.children, item => item)
    console.log('React.Children: ', children)
    return children
}

const Index = () => {
    return (
        <>
            <WarpComponent>
                { [1, 2, 3].map(item => <div key={item}>{ item }</div> ) }
                <span>一段文本</span>
                <Text />
            </WarpComponent>
            <MapComponent>
                { [1, 2, 3].map(item => <div key={item}>{ item }</div> ) }
                <span>一段文本</span>
                <Text />
            </MapComponent>
        </>
    )
}
```
<img src="https://little_lu.gitee.io/images/blog/react/react-api/childrenMap.png" width="900px">

**注意：**如果 `children` 是一个 `Fragment` 对象，它会被视为单一子节点的情况处理，而不会被遍历。

### Children.forEach
```js
React.Children.forEach(children, function[(thisArg)])
```
与 `React.Children.map` 用法类似，但 `map` 会返回一个处理后的新数组，`forEach` 不会返回一个数组，只会遍历传入的节点数组。

```js
const Text = () => {
    return ( <div>文本</div> )
}
const ForEachComponent = (props) => {
    React.Children.forEach(props.children, item => console.log(item))
    return props.children
}
const Index = () => {
    return (
        <>
            <ForEachComponent>
                { [1, 2, 3].map(item => <div key={item}>{ item }</div> ) }
                <span>一段文本</span>
                <Text />
            </ForEachComponent>
        </>
    )
}
```

### Children.count
```js
React.Children.count(children)
```
`React.Children.count` 返回 `children` 中的组件总数量，等同于通过 `map` 或 `forEach` 调用回调函数的次数。

```js
const Text = () => {
    return ( <div>文本</div> )
}
const CountComponent = (props) => {
    console.log('Count: ', React.Children.count(props.children))
    return props.children
}
const Index = () => {
    return (
        <>
            <CountComponent>
                { [1, 2, 3].map(item => <div key={item}>{ item }</div> ) }
                <span>一段文本</span>
                <Text />
            </CountComponent>
        </>
    )
}
```

### Children.only
```js
React.Children.only(children)
```
`React.Children.only` 验证 `children` 是否只有一个子节点（一个 `React` 元素），是则返回它，否则此方法会抛出错误。

```js
const Text = () => {
    return ( <div>文本</div> )
}

const OnlyComponent = (props) => {
    console.log('Only: ', React.Children.only(props.children))
    return props.children
}

const Index = () => {
    return (
        <>
            <OnlyComponent>
                <span>一段文本</span>
                <Text />
            </OnlyComponent>
        </>
    )
}
```
`React.Children.only` 不接受 `React.Children.map` 的返回值，因为它是一个数组而不是 `React` 元素。

### Children.toArray
```js
React.Children.toArray(children)
```
`React.Children.toArray` 将 `children` 这个复杂的数据结构以数组的方式扁平展开后返回一个新数组。

```js
const ToArrayComponent = (props) => {
    console.log('children: ', props.children)
    const children = React.Children.toArray(props.children)
    console.log('toArray: ', children)
    return ( <> {children} </> )
}

const Index = () => {
    return (
        <>
            <ToArrayComponent>
                <span>一段文本</span>
                { new Array(3).fill(0).map((item,index)=>
                    new Array(2).fill(1).map((item1,index1)=>
                        <div key={index+index1}>{item+item1}</div>)) }
            </ToArrayComponent>
        </>
    )
}
```
<img src="https://little_lu.gitee.io/images/blog/react/react-api/toArray.png" width="900px">