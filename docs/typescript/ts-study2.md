---
title: TypeScript学习笔记（二）
excerpt: TypeScript的接口的基本使用及属性和方法的写法，类的构造函数、继承、重写、访问类型及静态属性和方法
index_img: https://little_lu.gitee.io/images/blog/typescript/ts2.jpg
banner_img: https://little_lu.gitee.io/images/blog/typescript/ts2.jpg
tags: [TypeScript, 学习笔记]
categories: TypeScript学习笔记
date: 2021-04-30 10:00:00
---
## 1、TypeScript的interface接口
### 1.1、interface的基本使用
interface可以作为类型注解：
```js
  interface Girl {
    name: string,
    age: number
  }

  let girl: Girl = {
    name: "小红",
    age: 18
  }
```
接口可以继承接口：
```js
  interface Teacher extends Girl { // Teacher接口继承Girl接口
    teach(): string;
  }

  let teacher: Teacher = { // teacher必须实现Teacher接口及其继承的接口的所有属性和方法
    name: "衣老师",
    age: 18,
    teach(){
      return "我是衣老师！"
    }
  }
```
class类可以实现接口：
```js
  class Student implements Girl  {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  }
```

### 1.2、接口的可选值和任意值
如上述例子，接口的属性都是固定必须有的，不够灵活，如果想让一个值成为可选值该怎么做呢？TypeScript为我们准备好了相应的办法，就是在`:`号前加一个`?`
```js
  interface Girl {
    name: string,
    age: number,
    tel?: string // tel属性为可选值，可有可无
  }

  let girl1 = { // 有tel属性
    name: "有电话",
    age: 10,
    tel: "12345678900"
  }

  let girl2 = { // 没有tel属性
    name: "没有电话",
    age: 10
  }
```
但这样还有不够灵活，如果希望有一个自定义的属性名该怎么做呢？TypeScript也为我们提供了方法：
```js
  interface Girl {
    name: string,
    age: number,
    [myprop: string]: any //属性名为string类型的任意值，属性值为任意类型
  }

  let girl3 = {
    name: "自定义",
    age: 18,
    money: 888  // 任意值也是可选值，可有可无
  }
```

### 1.3、接口里的方法
接口里不仅可以存属性，还可以存方法：
```js
  interface Girl {
    name: string,
    age: number,
    tel?: string,
    [myprop: string]: any,
    say(): string   // 方法名为say，返回值为string类型
  }

  let girl = {
    name: "Jack",
    age: 38,
    say() {
      return "我叫" + this.name + ", 今年" + this.age + "岁";
    }
  }
```

*注：接口当作变量的类型注解时，变量必须完全符合接口定义的规范，不得增加或减少；而当类实现接口时，可以在其基础上增加属性和方法，但不可减少。*


## 2、TypeScript的类
### 2.1、类的基本使用
新建文件demo.ts，写入以下内容：
```js
  class Father {
    content = "我是你父亲！";
    say() {
      return this.content;
    }
  }

  let father = new Father();
  console.log(father.say());
```
用`ts-node demo`运行，输出 "我是你父亲！"。

### 2.2、类的继承
TypeScript的继承和ES6的继承是一样的，也是用关键字extends进行继承。
```js
  class Father {
    content = "我是你父亲！";
    fatherSay() {
      return this.content;
    }
  }

  class Son extends Father {
    content = "你是我儿子！";
    sonSay() {
      return this.content;
    }
  }

  let son = new Son();
  console.log(son.fatherSay());
  console.log(son.sonSay());
```
用`ts-node demo`运行，输出 "我是你父亲！" 和 "你是我儿子！"，说明继承起效果了。

### 2.3、类的重写
重写就是子类重新编写方法覆盖父类的方法：
```js
  class Father {
    say() {
      return "父亲";
    }
  }

  class Son extends Father {
    say() {
      return "儿子";
    }
  }

  let son = new Son();
  console.log(son.say());
```
用`ts-node demo`运行，输出 "儿子"，说明父类的say方法被子类重写了。

### 2.4、super关键字
在TypeScript中，提供了一个关键字super，指向父类，可以通过super.prop或super.method()的方式调用父类的属性或方法：
```js
  class Father {
    say() {
      return "父亲";
    }
  }

  class Son extends Father {
    say() {
      return super.say() + "儿子";
    }
  }

  let son = new Son();
  console.log(son.say());  // 输出 "父亲儿子"
```

### 2.5、类的访问类型
在TypeScript中，有三种访问类型：public、protected、private。
public：允许属性或方法在类内外及子类使用，不写默认是public
protected：允许属性或方法在类内及子类内使用
private：只允许在类内使用
```js
  class Person {
    private name = "父类";
    protected say() {
      return "父亲";
    }
  }

  class Girl extends Person {
    public sayHi() {
      //   return this.name; name是私有属性，只能在Person类内使用
      return super.say() + "儿子"; // say方法访问类型为protected，可以在类内及子类里使用
    }
  }

  let person = new Person();
  // console.log(person.name, person.say()) // 类外使用private和protected的属性或方法，均会报错
  let son = new Girl();
  console.log(son.sayHi()); // sayHi的访问类型为public，可以在类的内外使用
```

### 2.6、类的构造函数
TypeScript提供构造函数，让我们可以在new出对象的时候通过参数的形式初始化对象
```js
  class Person {
    private name;
    constructor(name: string) {
        this.name = name;
    }
    say() {
        return this.name;
    }
  }

  class Girl extends Person {
    constructor(name: string) {
        super(name); // 如果子类有constructor，必须显示调用super方法，并且必须写在constructor方法的最顶层
    }
  }

  let son = new Girl("父类");
  console.log(son.say()); // 输出"父类"
```

### 2.7、类的Getter和Setter
如果在类里面定义了一个private私有属性，在类外是无法直接获取或修改该属性的，所以TypeScript给我们提供了Getter和Setter方法
```js
  class Person {
    private _name: string;
    constructor(name: string) {
      this._name = name;
    }
    get name() { // 用来获取私有属性
        return "我是" + this._name;
    }
    set name(name: string) { // 用来给私有属性赋值
        this._name = name;
    }
  }

  let person = new Person("父类");
  console.log(person.name); // 输出"我是父类"
  person.name = "子类";
  console.log(person.name); // 输出"我是子类"
```

### 2.8、类的static
正常情况下，我们要获取类里面的属性或方法，需要new一个对象，但是通过static修饰的属性和方法，
可以直接用类进行获取，称为静态属性或静态方法：
```js
  class Person {
    static content = "静态属性";
    static say() {
      return "静态方法";
    }
  }

  console.log(Person.content); // 输出"静态属性"
  console.log(Person.say()); // 输出"静态方法"
```
