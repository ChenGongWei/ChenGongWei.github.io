---
title: TypeScript笔记（三）-- 联合类型、枚举类型及泛型
excerpt: TypeScript的联合类型的使用、类型保护的方法、枚举类型的定义及泛型的概念、定义、继承和使用
index_img: https://little_lu.gitee.io/images/blog/typescript/ts3.jpeg
banner_img: https://little_lu.gitee.io/images/blog/typescript/ts3.jpeg
tags: [TypeScript, 学习笔记]
categories: TypeScript学习笔记
date: 2021-05-06 10:00:00
---

# TypeScript笔记(三) - 联合类型、枚举类型及泛型
::: tip 摘录
TypeScript的联合类型的使用、类型保护的方法、枚举类型的定义及泛型的概念、定义、继承和使用
:::

## TypeScript的联合类型
联合类型指的是一个变量有多种可能的类型，多种类型间用符号`|`分割\
可以是基础类型：
```js
  let content: string | number = "content"; // content 既可以是字符串，也可以是数字
  content = 123;
```
也可以是对象类型：
```js
  interface Student {
    sid: string
    name: string
  }
  
  interface Teacher {
    tid: string
    subject: string
  }
  
  let man: Student | Teacher = {  // man 既可以是 Student 型，也可以是 Tacher 型
    sid: '1001',
    name: '小蔡'
  }
  man = {
    tid: '2001',
    subject: '体育'
  }
```
## TypeScript的类型保护
### as 类型断言
当一个变量有多种可能的类型时，可以通过`as`关键字来确定类型
```js
  interface StrProp {
    isStr: boolean
    name: '字符串'
  }

  interface NumProp {
    isStr: boolean
    age: 18
  }

  function say(arg: StrProp | NumProp) {
    // console.log(arg.name) // 报错
    if(arg.isStr) {
      // 当 arg 的 isStr 属性为true时，我们就断定 arg 是 StrProp 类型
      console.log((arg as StrProp).name)
    } else {
      console.log((arg as NumProp).age)
    }
  }
```
### in 语法
我们还可以通过`in`判断变量有没有某个属性从而确定其类型
```js
  interface StrProp {
    isStr: boolean
    name: '字符串'
  }

  interface NumProp {
    isStr: boolean
    age: 18
  }

  function say(arg: StrProp | NumProp) {
    if('name' in arg) {
      console.log(arg.name)
    } else { // 这里的 else 部分 TypeScript 能自动判断
      console.log(arg.age)
    }
  }
```
### typeof 语法
```js
  function test(arg: string | number) {
    if(typeof arg === 'string') {
      return arg.split('')
    } else {
      return 2 * arg
    }
  }
```

## Enum 枚举类型
枚举类型一般用来定义常量
```js
  // enum Sex { // 枚举类型可以不初始化值，默认从0自增
  //   MALE,
  //   FEMALE,
  //   UNKNOW
  // }

  enum Sex {
    MALE = 1, // 可以给定起始值，自动递增
    FEMALE,
    UNKNOW
  }

  function checkSex(sex: Sex) {
    let result = '';
    switch(sex) {
      case Sex.MALE:
        result = '男';
        break;
      case Sex.FEMALE:
        result = '女';
        break;
      case Sex.UNKNOW:
        result = '未知';
        break;
      default:
        break;
    }
    return result;
  }

  console.log(checkSex(1)) // '男'
```

## TypeScript的泛型
### 泛型的概念
如果希望实现函数的返回值类型与参数类型一致，可以这样写：
```js
  function fun(arg: string): string {
    return arg
  }
```
或者这样：
```js
  function fun(arg: number): number {
    return arg
  }
```
但是这些写法都太局限，不能满足所有情况，这时就可以使用泛型，
泛型就是泛指的类型，用`<>`进行定义，一般习惯用单个大写字母例如`<T>`
```js
  function fun<T>(arg: T): T { 
    return arg // 即可实现返回值类型与参数类型一致
  }
```
### 泛型数组
泛型数组的两种写法
```js
  // T[] 形式
  function fun<T>(arg: T[]): T[] {
    return arg.reverse()
  }
  fun<string>(['a', 'b', 'c', 'd'])
  // fun(['a', 'b', 'c', 'd'])  泛型也支持类型推断

  // Array<T>
  function func<T>(arg: Array<T>): Array<T> {
    return arg.reverse()
  }
  func<number>([1, 2, 3, 4, 5])
```
### 多个泛型定义
泛型可以定义多个，用法和一个类似
```js
  function fun<T, P>(first: T, second: P): [T, P] {
    return [first, second]
  }
  fun<string, number>('string', 123)
```
### 泛型中的继承
泛型可以通过继承来进行约束
```js
  interface Key {
    key: number
  }

  function fun<T extends Key>(arg: T): T { // 泛型T继承接口Key，所以参数必须含有key属性
    return {
      ...arg,
      key: new Date().getTime() + arg.key
    }
  }

  fun({
    key: 123,
    name: '测试'
  })
```
### 泛型的简单应用
实现一个 axios 方法，接收 url 和 payload 两个参数，根据 url 的不同，接收参数类型及返回值类型也不同
```js
  interface Todo {
    // Todo类型接口
    id: number;
    name: string;
    done: boolean;
  }

  let todos: Todo[] = [
    // 初始数据
    {
      id: 1,
      name: "代办1",
      done: false,
    },
    {
      id: 2,
      name: "代办2",
      done: true,
    },
  ];

  enum Urls {
    // 获取todo数据的接口，不需要参数，返回值类型为 Todo[]
    TODOS = "/api/todos",
    // 切换todo状态的接口，参数类型为 number，返回值类型 boolean
    TOGGLE = "/api/toggle",
    // 添加todo项的接口，参数类型为 Todo，返回值类型 boolean
    ADD = "/api/add",
  }

  // 定义一个工具类型
  // 根据泛型传入值来返回一个自定义的key
  type Key<U> = U extends Urls.TODOS ? "todos" : 
                U extends Urls.TOGGLE ? "toggle" : 
                U extends Urls.ADD ? "add" : "other";

  // 通过工具类型Key获取对应key，再根据key获取对应的参数类型
  type Payload<P> = {
    todos: any;
    toggle: number;
    add: Todo;
    other: any;
  }[Key<P>];

  // 通过工具类型Key获取对应key，根据key获取对应的结果类型
  type Result<R> = {
    todos: Todo[];
    toggle: boolean;
    add: boolean;
    other: any;
  }[Key<R>];

  function axios<T extends Urls>(
    url: T,
    payload?: Payload<T>
  ): Promise<Result<T>> | never {
    let res;
    switch (url) {
      case Urls.TODOS: // 获取todo数据，不需要参数，返回值为Todo[]类型
        res = todos.slice();
        break;
      case Urls.TOGGLE: // 改变todo状态，参数为number类型，返回值为boolean类型
        const todo = todos.find(({ id }) => id === payload);
        if (todo) {
          todo.done = !todo.done;
        }
        res = true;
        break;
      case Urls.ADD: // 添加todo，参数为Todo类型，返回值为boolean类型
        // 变量后面加!  为了让undefined和null通过编译
        todos.push(payload!);
        res = true;
        break;
      default:
        throw new Error("Unknow api!");
    }
    return Promise.resolve(res as any);
  }

  axios(Urls.ADD, {
    id: 3,
    name: '做笔记',
    done: false
  }) // 添加一条数据
  console.log(axios(Urls.TODOS)) // 获取全部数据
  axios(Urls.TOGGLE, 2) // 切换 id为2 的数据的 done 状态
```
