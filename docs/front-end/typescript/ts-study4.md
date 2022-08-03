---
title: TypeScript笔记（四）-- 索引类型、映射类型及辅助泛型
excerpt: TypeScript的索引类型(keyof)、映射类型(in)及常用的辅助泛型Pick、Omit、Exclude、Extract...
index_img: https://little_lu.gitee.io/images/blog/typescript/ts4.jpg
banner_img: https://little_lu.gitee.io/images/blog/typescript/ts4.jpg
tags: [TypeScript, 学习笔记]
categories: TypeScript学习笔记
date: 2021-05-19 10:00:00
---

# TypeScript笔记(四) - 索引 / 映射类型 & 辅助泛型
::: tip 摘录
TypeScript的索引类型(keyof)、映射类型(in)及常用的辅助泛型Pick、Omit、Exclude、Extract...
:::

## 索引类型（keyof）
```js
  function pluck(obj, keys) {
    return keys.map(key => obj[key])
  }
```
上面这个函数的目的是通过遍历 keys 来获取 obj 里面的值，最后返回包含所有值的数组，我们希望 keys 的所有 key 都是 obj 拥有的，如果要使用 ts 来做类型约束的话，用常规方法很难实现，这时就可以使用索引类型来实现：
```js
  function pluck<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
    return keys.map(key => obj[key])
  }
  
  interface Person {
    name: string
    age: number
  }
  let person: Person = {
    name: 'Jarid',
    age: 35
  }
  let strings = pluck(person, ['name', 'age'])
```
我们通过泛型及`keyof`来实现类型约束的，`keyof`就是**索引类型查询操作符**，`keyof T`就是获取泛型`T`的所有属性名的集合，在上面例子中就是`'name' | 'age'`，这样我们就获取到了 Person 上所有 key 组成的联合类型。`T[K]`是**索引访问**，获取`T`所有存在于`K`的属性的类型组成的联合类型。

## 映射类型（in）
```js
  type Keys = 'name' | 'hobby'
  type Person = { [K in Keys]: string }
```
ts 中 `in` 的用法和 `for...in` 类似，会对 Keys 进行遍历赋值，然后返回结果，上面这个例子得到的结果就是：js
```js
  type Person = {
    name: string
    hobby: string
  }
```
我们可以结合索引类型和映射类型来实现一些工具类泛型，例如实现一个将传入类型的所有属性设置成可选属性，然后返回处理后的类型：
```js
  type Optional<T> = {
    [P in keyof T]?: T[P]
  }
  type Search = {
      name: string
      age: number
  }
  type OptionalSearch = Optional<Person>
```
`[P in keyof T]`就是遍历`T`中的 key，`T[P]`就是当前 key 的类型，然后我们在遍历的 key 后面加上`?`就是将这个属性变成可选属性，这样我们在调用这个泛型的时候，就会将传入的类型的所有属性变成可选属性并返回处理好后的新类型。

## 辅助泛型
结合索引类型和映射类型能实现很多很方便实用的泛型，其实在 TS 已经内置了一些常用的辅助泛型。
### Partial（可选）
```js
  /**
   * Make all properties in T optional
   */
  type Partial<T> = {
    [P in keyof T]?: T[P]
  }
```
`Partial<T>`将`T`的所有属性变成可选的：
* `[P in keyof T]`通过映射类型，遍历`T`上所有的属性
* `?:`将属性设置为可选的
* `T[P]`通过索引访问将类型设置为原来的类型

### Required（必选）
```js
  /**
   * Make all properties in T required
   */
  type Required<T> = {
    [P in keyof T]-?: T[P]
  }
```
这个泛型的作用和`Partial`刚好相反，是将传入类型的所有属性变成必选的，`-?`的意思就是将属性的`?`去掉，这样该属性自然就变成必选属性了。
### Readonly（只读）
```js
  /**
   * Make all properties in T readonly
   */
  type Readonly<T> = {
    readonly [P in keyof T]: T[P];
  }
```
`Readonly<T>`将`T`的所有属性变成只读的
### Exclude（排除）
```js
  /**
   * Exclude from T those types that are assignable to U
   */
  type Exclude<T, U> = T extends U ? never : T
```
`Exclude<T, U>`从`T`中排除存在于`U`的类型后组成的联合类型
* 通过遍历`T`中的所有子类型，如果该类型存在于`U`，则返回`never`，否则返回该子类型，最终得到的便是`T`排除了`U`中所有类型后的联合类型。
* `never`表示一个不存在的类型，与其他类型联合后，never会被去除掉
* `type E = Exclude<'a' | 'b' | 'd', 'b' | 'c'>`，结果为：`type E = 'a' | 'd'`
  
### Extract（提取）
```js
  /**
   * Extract from T those types that are assignable to U
   */
  type Extract<T, U> = T extends U ? T : never
```
`Extract<T, U>`提取同时存在于联合类型`T`和`U`的类型组成的联合类型\
这个泛型的作用和`Exclude`刚好相反，例如`type E = Extract<'a' | 'b' | 'd', 'b' | 'c'>`，这次我们得到的结果是`type E = 'b'`
### Pick（筛选）
```js
  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Pick<T, K extends keyof T> = {
    [P in K]: T[P]
  }
```
`Pick<T, K extends keyof T>`从`T`筛选存在于`K`的类型
* `K extends keyof T` `K`的类型必须存在于`T`中
* `[P in K]`遍历`K`的所有类型
* `T[P]`通过索引访问将类型设置为原来的类型
  
### Omit（过滤）
```js
  /**
   * Construct a type with the properties of T except for those in type K.
   */
  type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>
```
`Omit<keyof T, K>`就是从`T`中将`K`中所有属性过滤
* `Omit`是结合`Pice`和`Exclude`实现的，效果和`Pick`相反
* 先通过`Exclude<keyof T, K>`从`T`的索引类型集合中排除`K`的所有类型
* 然后通过`Pick`从`T`中筛选出排除后的所有类型
`Example:`
```js
  interface Coder {
    id: string,
    name: string,
    age: number,
    hobby: string[]
  }

  const JSer: Omit<Coder, 'name' | 'age'> = {
    id: '1001',
    hobby: ["code", "羽毛球"]
  }
```

### Record（记录）
```js
  /**
   * Construct a type with a set of properties K of type T
   */
  type Record<K extends keyof any, T> = {
    [P in K]: T;
  }
```
`Record<K extends keyof any, T>`遍历`K`的每一项属性，类型设置为`T`\
`Example:`
```js
  interface Obj {
    title: string,
    value: number
  }
  
  const List: Record<string, Obj> = {
    home: { title: '首页', value: 1 },
    search: { title: '搜索', value: 2 }
  }
```
### ReturnType（返回值类型）
```js
  /**
   * Obtain the return type of a function type
   */
  type ReturnType<T extends (...args: any) => any> = T extends (
    ...args: any
  ) => infer R
    ? R
    : any
```
`ReturnType<T extends (...args: any) => any>` 返回传入函数类型`T`的返回值类型
* `T extends (...args: any) => any` 约束参数`T`必须是函数类型
* `infer`关键词的作用是让TS自己推导类型，并将推导结果存储在`infer`后面的参数类型上
* `infer`关键词只能在`extends`条件类型上使用
* 这里的实现方式就是先判断`T`是否是函数类型并推导返回值类型存储在`R`上，是则返回`R`，不是则返回`never`