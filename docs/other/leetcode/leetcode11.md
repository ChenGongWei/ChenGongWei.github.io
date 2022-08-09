---
title: LeetCode11、盛最多水的容器
tags: [LeetCode, 学习笔记]
categories: LeetCode刷题记录
---

# LeetCode11、盛最多水的容器

## 题目
给定一个长度为 `n` 的整数数组 `height` 。有 `n` 条垂线，第 `i` 条线的两个端点是 `(i, 0)` 和 `(i, height[i])` 。

找出其中的两条线，使得它们与 `x` 轴共同构成的容器可以容纳最多的水。

返回容器可以储存的最大水量。

说明：你不能倾斜容器。

::: info 示例
![image.png](img/leetcode_11.jpg)
```js
输入：[1,8,6,2,5,4,8,3,7]
输出：49 
解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。
在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。
```
:::


::: tip 提示:
-   `n == height.length`
-   2 <= n <= 10^5^
-   0 <= height[i] <= 10^4^
:::


## 思路
第一眼，暴力解法，双重循环将所有结果遍历一遍，结果直接给我来了个超时警告，哈哈

还是想想其他方法吧，既然是求最大的面积，那就先从最大底边开始计算

通过两个指针指向头尾，然后计算面积记录下来，然后移动较短的指针，继续计算面积并与记录的面积比较，更新最大面积

直至最后两指针相遇，返回记录的面积即可

## 代码实现
```js
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    const len = height.length
    // x  y  分别指向开头和结尾  max 记录最大面积
    let max = 0, x = 0, y = len - 1
    while(x !== y) {
        // 计算当前两个指针之间的面积
        const area = Math.min(height[x], height[y]) * (y - x)
        // 比较记录
        if (max < area) max = area
        // 移动较短的指针
        if (height[x] < height[y]) {
            x++
        } else {
            y--
        }
    }
    return max
};
```

## 优化
题解里的大多都是用的双指针的思路，所以我就参考着将我的代码简洁化一点：
```js
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // x  y  分别指向开头和结尾  max 记录最大面积
    let max = 0, x = 0, y = height.length - 1
    while(x < y) {
        // 计算当前两个指针之间的面积 并移动较短的指针
        const area = (y - x) * (
            height[x] < height[y] ? height[x++] : height[y--]
        )
        // 比较记录
        max = Math.max(max, area)
    }
    return max
};
```