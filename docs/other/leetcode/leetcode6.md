---
title: LeetCode6、Z 字形变换
tags: [LeetCode, 学习笔记]
categories: LeetCode刷题记录
---

# LeetCode6、Z 字形变换

## 题目
将一个给定字符串 `s` 根据给定的行数 `numRow` ，以从上往下、从左到右进行 `Z` 字形排列。

比如输入字符串为 `"PAYPALISHIRING"` 行数为 3 时，排列如下：
```
P   A   H   N
A P L S I I G
Y   I   R
```

之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如：`"PAHNAPLSIIGYIR"`。

请你实现这个将字符串进行指定行数变换的函数。

::: info 示例
```js
输入： s = "PAYPALISHIRING", numRows = 3
输出： "PAHNAPLSIIGYIR"

输入：s = "PAYPALISHIRING", numRows = 4
输出："PINALSIGYAHRPI"
解释：
P     I    N
A   L S  I G
Y A   H R
P     I

```
:::

::: tip 提示:
-   `1 <= s.length <= 1000`
-   `s` 由英文字母（小写和大写）、`','` 和 `'.'` 组成
-   `1 <= numRows <= 1000`
:::


## 思路
这个题目上说的 `Z` 字形排列，我看了半天也没看出来是 `Z` 字形，倒像是一个反 `N` 形。

不过这都不重要，能理解题目的要求即可，这个题目是将字符串的字符按从开始位置纵向向下排列，

达到指定行数后，斜向右上排列，到达起始位置时，又向下排列，重复排完所有字符，然后按行把字符组合起来即答案

这题解起来也简单，按上面的排列顺序，利用 `map` 储存每行的字符，最后拼接输出即可

## 代码实现
```js
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    const len = s.length
    const map = new Map()
    let x = 0,  // 横坐标
        idx = 0 // 字符串下标

    // 遍历完字符串则停止循环
    while(idx < len) {
        // 当横坐标为0时，需要处理 numRows 个字符
        if (x === 0) { 
            for(; x < numRows && idx < len; x++) {
                map.set(x, (map.get(x) || '') + s[idx])
                idx++
            }
            // 处理完后 需要将横坐标往上移动两位  但不能小于 0
            x = ((x - 2) > -1) ? (x - 2) : 0
        } else {
            // 在 map 存入当前横坐标的字符  然后移动下标和横坐标
            map.set(x, (map.get(x) || '') + s[idx])
            idx++
            x--
        }
    }

    let res = ''
    // 将 map 记录的字符串按行取出拼接
    for(let i = 0; i < numRows; i++) {
        res += (map.get(i) || '')
    }
    return res
};
```

## 优化
优化了下遍历过程

```js
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    // 行数为 s 的长度 和 numRows 中的较小值
    const len = Math.min(s.length, numRows)
    // 如果行数为 1 直接返回 s
    if(len === 1) return s
    const arr = []
    let x = 0,  // 横坐标
        down = false // 是否向下

    for(const c of s) {
        // 将当前字符存入当前行
        arr[x] = (arr[x] || '') + c
        // 临界值 开始行和结束行 需要将方向调转
        if (x === 0 || x === (numRows - 1)) {
            down = !down
        }
        // 横坐标根据当前方向进行变化
        x += (down ? 1 : -1)
    }

    let res = ''
    // 将 arr 记录的字符串按行取出拼接
    for(let i = 0; i < arr.length; i++) {
        res += arr[i]
    }
    return res
};
```