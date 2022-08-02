---
title: React Hook 初体验
excerpt: 最近开始学习React了，本着学新不学旧的原则，就不学class直接学Hook了。本文主要记录了useState、useEffect、useCallback、useMemo四个Hook。
index_img: https://little_lu.gitee.io/images/blog/react/react1.jpg
banner_img: https://little_lu.gitee.io/images/blog/react/react1.jpg
tags: [React, Hook, 学习笔记]
categories: React学习笔记
date: 2021-07-25 10:00:00
---

>`Hook` 是 `React 16.8` 的新增特性。它可以让你在不编写 `class` 的情况下使用 `state` 以及其他的 `React` 特性。

之前工作一直用的都是 `Vue`，最近换工作了，公司用的是 `React`，于是开始学习 `React`，既然推出了 `React Hook`，本着学新不学旧的原则，舍弃 `class` 拥抱 `function`，废话不多说，进入正题吧。

## useState
```js
    import React, { useState } from 'react'
    
    const Counter = props => {
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
    
    export default Counter
```
&emsp;&emsp;每一个 `Hook` 都是 `useXXX` 的格式，`useState`就是一个 `Hook`，它会给组件添加一些内部`state`，`React` 在重复渲染的时候会保留这些`state`。`useState` 接收一个参数作为初始值，以数组形式返回当前状态和更新它的函数，当初始值需要通过复杂计算获得时，可传入一个函数，在函数中返回初始值，该函数只会在初始渲染的时候被调用。

## useEffect
```js
    import React, { useState, useEffect } from 'react'
    
    const Counter = props => {
      
      const [count, setCount] = useState(0)
      const [num, setNum] = useState(0)
      useEffect(() => {
          console.log('初始化，相当于 componentDidMount')
          return () => console.log('销毁，相当 componentDidUnmount')
      })
      useEffect(() => {
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
    
    export default Counter
```
&emsp;&emsp;`useState`实现了`class`的`state`，而`useEffect`则实现了`class`的生命周期。`useEffect`可以接受两个参数，第一个参数是一个函数，第二个参数是一个数组。当不传第二个参数或传空数组时，会在组件初始化和每次重新渲染的时候执行第一个函数，效果相当于`componentDidMount`和`componentDidUpdate`，该函数还可以返回一个函数，会在组件销毁的时候执行，相当于`componentWillUnmount`。

&emsp;&emsp;有些操作我们并不想每次组件重新渲染都执行，只想在某些特定的值发生变化的时候才执行，这是就会用到第二个参数，将依赖的变量填入第二个参数数组里，组件会在初始化渲染和该数组项的值发生变化的时候才去执行第一个函数。`useEffect`和`useState`一样都可以在组件中多次使用，你可以将不同逻辑拆分开来写在不同的`useEffect`里面。

## useCallback
```js
    const [num, setNum] = useState(0)
    const printNum = useCallback(() => {
        console.log(`num：${num}`)
    }, [num])
```
&emsp;&emsp;`useCallback`也接收两个参数，一个函数和一个依赖项数组，返回一个缓存后的第一项函数，该函数只有在依赖项发生变化时被更新，如果没有依赖项，就不会更新。正常定义的函数，在组件重新渲染的时候会被更新重新赋值，如果这个函数被传递给子组件，就会引起子组件不必要的渲染。而这个`Hook`就解决了这种不必要的重新渲染。

## useMemo
```js
    const [num, setNum] = useState(0)
    const doubleNum = useCallback(() => num * 2, [num])
```
&emsp;&emsp;`useMemo`接收的参数和`useCallback`一样，不过`useMemo`缓存的是第一个函数的返回值，该值也是在依赖项发生改变的时候才会重新计算更新。`useMemo`可以通过第一个函数返回一个函数的形式实现`useCallback`的效果，不过不推荐这么做，因为这两个`Hook`的定义就是一个缓存函数，一个缓存值。

&emsp;&emsp;以上就是我的`React Hook`初体验，体验不错，希望继续！

