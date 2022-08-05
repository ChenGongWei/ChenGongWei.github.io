---
title: LeetCode1、两数之和
tags: [LeetCode, 学习笔记]
categories: LeetCode刷题记录
---

# LeetCode1、两数之和

## 题目
给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

请你将两个数相加，并以相同形式返回一个表示和的链表。

你可以假设除了数字 `0` 之外，这两个数都不会以 `0` 开头。


*示例：*
```js
输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。

输入： nums = [3,2,4], target = 6
输出： [1,2]

输入： nums = [3,3], target = 6
输出： [0,1]
```

*提示*
-   每个链表中的节点数在范围 `[1, 100]` 内
-   `0 <= Node.val <= 9`
-   题目数据保证列表表示的数字不含前导零

## 思路
这个题目乍一看还有点蒙，因为在平时工作中没有用到链表，所以对这种数据结构有点陌生，还想大学的数据结构课程上没有打瞌睡，对这个还是有印象的。

这个题目的链表指的是单链表，即每一项存储自己的值和指向下一项的地址，形成一种单向的链表结构，

## 代码实现
```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i ++) {
        for(let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
};
```

## 优化
看到执行用时和内存消耗都远不如别人，就去看了下别人的题解

果然，我这种方法被称为暴力枚举，是最简单也最没技术含量的😂

然后看了下别人的解题思路：

通过 `Map` 哈希表来解决，第一层 `for` 循环是少不了的，遍历到当前项 `a` 时，用 `target` 减去 `a` 得到的 `b` 去哈希表里找，找到了就返回哈希表里索引 `b` 对应的值和当前的索引，没找到就把 `a` 当 `key`，当前索引为值，存入哈希表里，然后遍历下一项，下面是优化后的代码实现：
```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();
    for(let i = 0; i < nums.length; i ++) {
        if (map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i]
        } else {
            map.set(nums[i], i)
        }
    }
};
```
