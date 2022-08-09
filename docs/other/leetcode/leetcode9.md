---
title: LeetCode9、回文数
tags: [LeetCode, 学习笔记]
categories: LeetCode刷题记录
---

# LeetCode9、回文数

## 题目

给你一个整数 `x` ，如果 `x` 是一个回文整数，返回 `true` ；否则，返回 `false` 。

回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

例如，`121` 是回文，而 `123` 不是。


::: info 示例
```js
输入： x = -121
输出： false
解释： 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。

输入： x = 121
输出： true

输入： x = 10
输出： false
解释： 从右向左读, 为 01 。因此它不是一个回文数。
```
:::

::: tip 提示:
- -2^31^ <= x <= 2^31^ - 1
- 你能不将整数转为字符串来解决这个问题吗？
:::


## 思路

这个题目刚开始我是打算将其转为字符串，然后通过两个指针从两边移动到中间，期间如果指向的数字不相同，则返回 `false`

但是又给了个提示希望可以不转为字符串来解决，那只能考虑其他方法了

既然回文数是正序和倒序读都一样的整数，那么我们首先就可以把负数直接排除掉，然后小于 `10` 的也可以直接判定为 `true`

剩下的我们可以用到之前 _整数反转_ 里的方法，先将整数反转，然后与原数比较，相同则返回 `true`

## 代码实现

```js
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  // 小于 0 直接返回 false
  if (x < 0) return false;
  // 0 ~ 9 返回 true
  if (x < 10) return true;
  // result 用来存储反转后的整数
  let result = 0,
    temp = x;
  while (temp !== 0) {
    result = result * 10 + (temp % 10);
    temp = (temp / 10) | 0;
  }
  // 最后返回是否相等
  return result === x;
};
```

## 优化

看了题解，有个方法是取出整数的头尾数字进行判断，不相等则返回 `false` ，否则取下一组头尾数字，直至全部取完

刚开始我也想到了这种方法，但是没有想到怎么取出头部的数字，所以就没有用这种方法，没想到在题解里看到了

```js
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  // 小于 0 直接返回 false
  if (x < 0) return false;
  // 0 ~ 9 返回 true
  if (x < 10) return true;
  // 获取 x 的量级  例 1931 -> 1000
  let n = 10 ** Math.floor(Math.log10(x));
  while (n > 1 && x > 0) {
    // 如果头尾数字不同  返回 false
    if (Math.floor(x / n) !== x % 10) return false;
    // 将头尾数字去掉
    x = Math.floor((x % n) / 10);
    // 数量级下降两位
    n /= 100;
  }
  return true;
};
```
