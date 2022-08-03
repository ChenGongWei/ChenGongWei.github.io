---
title: TypeScript笔记（五）--  tsconfig.json 配置文件
excerpt: TypeScript中的tsconfig.json配置文件，files、include、exclude、extends、compolerOptions等
index_img: https://little_lu.gitee.io/images/blog/typescript/ts5.jpg
banner_img: https://little_lu.gitee.io/images/blog/typescript/ts5.jpg
tags: [TypeScript, 学习笔记]
categories: TypeScript学习笔记
date: 2021-05-30 10:00:00
---

# tsconfig.json 配置文件

> 如果一个目录下存在`tsconfig.json`文件，那么它意味着这个目录是`TypeScript`的根目录，`tsconfig.json`文件中指定了用来编译这个项目的根文件和编译选项。
> 
## files、include和exclude 指定编译
我们项目里一般都会有大量的`ts`文件，如果我们不想全部文件都编译，只想编译其中一部分，就可以用到`tsconfig.json`的这几个配置来实现：
 * 1、使用`files`配置
 `files`属性用来指定要编译的文件，可以配置一个数组列表，里面包含指定文件的相对或绝对路径，编译器在编译的时候只会编译包含在`files`中列出的文件，如果不指定，则取决于有没有设置`include`选项，如果没有`include`选项，则默认会编译根目录以及所有子目录中的文件。这里列出的路径必须是指定文件，而不是某个文件夹，例如只想编译`demo.ts`和`test.ts`文件：
 ```json
  {
    "compilerOptions": {
      //any something
      //........
    },
    "files": ["demo.ts", "test.ts"],
  }
 ```
 * 2、使用`include`配置
 `include`属性用来指定要编译要包含的路径列表，和`files`的区别在于，这里的路径可以是文件夹，也可以是文件，可以使用相对和绝对路径，例如只想编译`src`下所有的`ts`文件：
 ```json
  {
    "compilerOptions": {
      //any something
      //........
    },
    "include": ["src/*"],
  }
 ```
 * 3、使用`exclude`配置
 `exclude`属性作用和`include`刚好相反，意思是要排除的、不编译的文件，它也可以指定一个列表，规则和`include`一样，可以是文件或文件夹，可以是相对路径或绝对路径，例如排除所有`node_modules`下的`ts`文件：
 ```json
  {
    "compilerOptions": {
      //any something
      //........
    },
    "exclude": ["node_modules"],
  }
 ```
> `files`指定一个包含相对或绝对文件路径的列表，而`include`和`exclude`属性指定一个文件glob匹配模式列表。支持的glob通配符有：
> * `*`匹配0或多个字符（不包含目录分隔符）
> * `?`匹配一个任意字符（不包含目录分隔符）
> * `**/`递归匹配任意子目录

## extends 继承配置
`tsconfig.json`文件可以利用`extends`属性指定一个其他的`tsconfig.json`文件路径，来继承这个配置文件里的配置，继承来的文件的配置和当前文件属性重复时会覆盖当前文件定义的配置。
`configs/base.json`:
```json
  { 
    "compilerOptions": {
      //any something
      //........
    },
    "files": ["main.ts"]
  }
```
`tsconfig.json`:
```json
  { 
    "compilerOptions": {
      //any something
      //........
    },
    "include": ["src/**/*"],
    "extends": ["./configs/base"]
  }
```

## compileOnSave 保存时编译
设置`compileOnSave`属性为`true`后，可以让IDE在保存文件的时候根据`tsconfig.json`重新编译生成文件，该特性需要`Visual Studio 2015`、`TypeScript1.8.4`以上并且安装`atom-typescript`插件
```json
  { 
    "compileOnSave": true,
    "compilerOptions": {
      //any something
      //........
    }
  }
```

## compilerOptions 编译选项
`tsconfig.json`文件提供了非常多的配置项，以下仅整理部分选项，[查看全部配置项请前往官网](https://www.tslang.cn/docs/handbook/compiler-options.html)

| 选项<div width=290px /> | 类型 | 默认值 | 说明 |
| ---- | ---- | --- | --- |
| target | string | ES3 | 编译结果使用的版本标准。值包含`ES3`, `ES5`, `ES6`/`ES2015`, `ES2016`, `ES2017`, `ES2018`, `ES2019`, `ES2020`, `ESNext`
| module | string | target === `ES6` ? `ES6` : `commonjs` | 编译结果使用的模块化标准: `None`, `CommonJS`, `AMD`, `System`, `UMD`, `ES6`/`ES2015`, `ES2020`, `ESNext` |
| jsx | string | preserve | 指定`jsx`代码用于的开发环境: `preserve`, `react-native`, `react` |
| outDir | string |  | 用来指定编译后文件的存放位置，如未指定，输出文件会和编译文件在同一目录 |
| rootDir | string |  | 用来指定编译文件的根目录，编译器会在根目录查找入口文件，如果编译器发现以`rootDir`的值作为根目录查找入口文件并不会把所有文件加载进去的话会报错，但是不会停止编译 |
| baseUrl | string |  | 用于设置解析非相对模块名称的基本目录，相对模块不会受`baseUrl`的影响 |
| paths | object |  | 模块名到基于`baseUrl`的路径映射的列表 |
| sourceMap | boolean | false | 是否生成`sourceMap`文件，这个文件里保存的，是转换后代码的位置，和对应的转换前的位置。有了它，出错的时候，通过断点工具可以直接显示原始代码，而不是转换后的代码 |
| allowJs | boolean | false | 是否对`js`文件进行编译 |
| checkJs | boolean | false | 用来指定是否检查和报告`js`文件中的错误 |
| removeComments | boolean | false | 用于指定是否将编译后的文件中的注释删掉，设为`true`的话即删掉注释 |
| noEmit | boolean | false | 是否不生成编译文件 |
| strict | boolean | false | 是否开启严格检查 |
| alwaysStrice | boolean | false | 编译后的文件是否开启严格模式 |
| noImplicitAny | boolean | false | 是否不允许隐式的any，默认`false`（允许） |
| noFallthroughCasesInSwitch | boolean | false | 是否检查`switch`语句包含正确的`break` |
| noImplicitReturns | boolean | false | 检查函数有没有返回值，设为true后，如果函数没有返回值则会提示 |
| noUnusedLocals | boolean | false | 是否检查有没有未使用的局部变量 |
| strictNullChecks | boolean | false | 是否严格检查空值，检查有可能为`null`的地方 |
| strictFunctionTypes | boolean | false | 是否严格检查函数的类型 |
| strictPropertyInitialization | boolean | false | 是否严格检查属性是否初始化 |
| allowSyntheticDefaultImports | boolean | false | 是否允许对不包含默认导出的模块使用默认导入。这个选项不会影响生成的代码，只会影响类型检查 |
| resolveJsonModule | boolean | false | 是否允许把`json`文件当做模块进行解析 |
| isolatedModules | boolean | false | 是否将每个文件作为单独的模块 |


