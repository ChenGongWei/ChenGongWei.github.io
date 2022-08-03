---
title: TS学习笔记（一）
excerpt: TypeScript的基础静态类型、对象静态类型、类型注解、类型推断、数组类型定义及函数参数和返回类型定义
index_img: https://little_lu.gitee.io/images/blog/typescript/ts1.jpg
banner_img: https://little_lu.gitee.io/images/blog/typescript/ts1.jpg
tags: [TypeScript, 学习笔记]
categories: TypeScript学习笔记
date: 2021-04-27 10:00:00
---
# TypeScript学习笔记（一）- 类型

::: tip 摘录
TypeScript的基础静态类型、对象静态类型、类型注解、类型推断、数组类型定义及函数参数和返回类型定义
:::

## 1、第一个TypeScript Demo

1. 新建一个文件 `demo1.ts` 
2. 编写一个方法并执行：
   ```js
      function say() {
        let web = "Hello World"
        console.log(web)
      }
      say()
   ```
 
3. 在命令行编译并执行该文件：
+ <code style="color:#e83e8c">tsc demo1.ts</code> &emsp; *// 将 ts文件编译成js文件*
+ <code style="color:#e83e8c">node demo1.js</code> &emsp; *// 执行 js文件 命令行输出 "Hello World"*
4. 安装`ts-node`提高效率
每次运行ts文件都要先编译后执行，比较麻烦，所以可以安装`ts-node`提高效率：
+ <code style="color:#e83e8c">npm install ts-node -g</code> &emsp; *// 全局安装 ts-node*
+ <code style="color:#e83e8c">ts-node demo1.ts</code> &emsp; *// 编译执行 ts文件 命令行输出 "Hello World"*

## 2、TypeScript静态类型
静态类型是TypeScript的一个主要特点，一旦定义好一个变量的静态类型，不能再改变了
   ```js
      let count: number = 1; // 定义count 是个 number 类型的静态类型。不能变更为其他类型
      count.toFixed();    // count 确定为 number 类型之后，会具备 number 类型的属性和方法
      // count = "hello"; // 赋值其他类型会报错

      interface XiaoJieJie { // 还可以通过interface（接口）来自定义静态类型
        name: string,
        age: number
      }

      let xiaohong: XiaoJieJie = { // 声明的变量必须符合自定义类型，不然会报错
        name: "小红",
        age: 18
      }
   ```
<b>如果使用了静态类型，不仅意味着变量的类型不可以改变，还意味着类型的属性和方法也跟着确定了。这个特点就大大提高了程序的健壮性，并且编辑器这时候也会给你很好的语法提示，加快了你的开发效率。</b>

## 3、TypeScript的基础静态类型和对象静态类型
1. 基础静态类型
声明静态类型的方式很简单，在变量后面加 `：` 然后加上对应类型即可
```js
  let num: number = 10086; 
  let myName: string = "cgw";
```
      常见的基础静态类型有：number、string、null、undefined、boolean、symbol、void等

2. 对象静态类型
```js
  const person: { // 对象类型
    name: string, // 类型
    age: number
  } = {
    name: "小红", // 值
    age: 18
  }
  console.log(person)

  const persons: string[] = ["小红", "小兰", "小青"]; // 字符串数组类型

  class Person{}
  const dj: Person = new Person(); // 类 类型

  const see: () => string = () => "see"; // 函数 类型
```

## 4、TypeScript的类型注解和类型推断
1. 类型注解
TypeScript里的类型注解是一种轻量级的为函数或变量添加约束的方式。可以为变量、函数参数、函数返回值等添加类型注解。
```js
  let num1: number = 12; // 该变量为number类型
  let num2: number = 20;

  function sum(a: number, b: number): number{ // 该函数接收两个number类型的参数，返回一个number类型的值
    return a + b; 
  }

  console.log(sum(num1, num2));
```
2. 类型推断
当未给变量添加类型注解时，TypeScript会自动的去尝试分析变量的类型。
例如下面这行代码，虽然未给变量添加类型注解，但当鼠标放上去时，ts自动将其添加为number类型。\
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3554bf16a10d4edca0ab84fef2b08041~tplv-k3u1fbpfcp-zoom-1.image)

## 5、TypeScript的数组类型定义
1. 简单数组类型
```js
  let numArr: number[] = [1, 2, 3, 4]; // number数组
  let strArr: string[] = ['a', 'b', 'c']; // string数组
```
2. 复合数组类型
当一个数组有多种数据类型时:
```js
  let arr: (number | string)[] = ['a', 'b', 1, 4, 'c']; // 既有number类型，又有string类型的数组
  let arr2: any[] = ['a', 1, null, undefined, {a: 1}]; // 任意类型的数组
```
3. 对象数组类型
当一个数组每一项都为一个对象时：
```js
  let xjjArr: { name: string, age: number }[] = [
    { name: "小红", age: 18 },
    { name: "小兰", age: 20 },
  ];
```
这样定义比较麻烦，可以使用`类型别名`来简化：
```js
  type Lady = { name: string, age: number }; // 用type来定义类型别名
  let xjjArr: Lady[] = [
    { name: "小红", age: 18 },
    { name: "小兰", age: 20 },
  ];
```
4. 类 数组类型
```js
  class Lady {
    name: string;
    age: number;
  }

  let xjjArr: Lady[] = [
    { name: "小红", age: 18 },
    { name: "小兰", age: 20 },
  ];
```

## 6、TypeScript的函数参数和返回类型定义
1. 无返回值
如果一个函数没有返回值的话，我们可以给它加`void`类型注解，表示没有任何返回值。
```js
  function say(): void{ // 该函数没有返回值
    console.log("hello world"); 
  }
```
2. 简单类型
我们可以给函数参数及返回值加上类型注释，提高程序的健壮性。
```js
  function sum(a: number, b: number): number{ // 该函数接收两个number类型的参数，返回一个number类型的值
    return a + b; 
  }
```
3.参数为对象解构时
当参数为对象解构时，写法会稍微麻烦一些。
```js
  function sum({num1, num2}: {num1: number, num2: number}): number{
    return num1 + num2;
  }
  console.log(sum({num1: 123, num2: 456}));
```

