---
title: LeetCode2、两数相加
tags: [LeetCode, 学习笔记]
categories: LeetCode刷题记录
---

# LeetCode2、两数相加

## 题目
给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位数字。

请你将两个数相加，并以相同形式返回一个表示和的链表。

你可以假设除了数字 `0` 之外，这两个数都不会以 `0` 开头。


::: info 示例:
![image.png](img/leetcode_2.jpg)
```js
输入： l1 = [2,4,3], l2 = [5,6,4]
输出： [7,0,8]
解释： 342 + 465 = 807

输入： l1 = [0], l2 = [0]
输出： [0]

输入： l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
输出： [8,9,9,9,0,0,0,1]
```
:::


::: tip 提示:
-   每个链表中的节点数在范围 `[1, 100]` 内
-   `0 <= Node.val <= 9`
-   题目数据保证列表表示的数字不含前导零
:::


## 思路
这个题目乍一看还有点蒙，因为在平时工作中没有用到链表，所以对这种数据结构有点陌生，还想大学的数据结构课程上没有打瞌睡，对这个还是有印象的。

这个题目的链表指的是单链表，即每一项存储自己的值和指向下一项的地址，形成一种单向的链表结构。

根据题目中的提示 逆序 存储及示例，很容易找到规律，及两个链表都从第一项开始相加，满`10`进`1`，最后的结果也是相同顺序形成的链表，既然找到规律的，就开始动手实现它：

## 代码实现
```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    return getSum(l1, l2)
};

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @param {number} m 是否需要进位
 * @return {ListNode}
 */
var getSum = function(l1, l2, m = 0) {
    let ln = null
    if (l1 || l2 || m > 0) {
        const sum = (l1?.val || 0) + (l2?.val || 0) + m
        const n = sum > 9 ? 1 : 0
        ln = new ListNode(sum > 9 ? (sum - 10) : sum)
        ln.next = (l1 || l2) 
            ? getSum(l1?.next || null, l2?.next || null, n) 
            : null
    }
    return ln
}
```


## 优化
看了下大佬们的题解，大致思路和我的都差不多，不过实现方式有些不太一样，我用的是递归，看到有用 `while` 循环的，也来实验一下效果：
```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let head = null, temp = null
    let carry = 0 // 进位
    while (l1 || l2) {
        const num1 = l1?.val || 0
        const num2 = l2?.val || 0
        let sum = num1 + num2 + carry
        carry = sum > 9 ? 1 : 0
        if (!head) {
            temp = new ListNode(sum % 10)
            head = temp
        } else {
            temp.next = new ListNode(sum % 10)
            temp = temp.next
        }
        l1 = l1?.next
        l2 = l2?.next
    }
    if (carry) {
        temp.next = new ListNode(carry)
    }
    return head
};
```