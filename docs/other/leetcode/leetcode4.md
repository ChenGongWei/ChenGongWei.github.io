---
title: LeetCode4、寻找两个正序数组的中位数
tags: [LeetCode, 学习笔记]
categories: LeetCode刷题记录
---

# LeetCode4、寻找两个正序数组的中位数

## 题目
给定两个大小分别为 `m` 和 `n` 的正序（从小到大）数组 `nums1` 和 `nums2`。请你找出并返回这两个正序数组的中位数 。

算法的时间复杂度应该为 `O(log (m+n))` 。


*示例：*
```js
输入： nums1 = [1,3], nums2 = [2]
输出： 2.00000
解释： 合并数组 = [1,2,3] ，中位数 2

输入： nums1 = [1,2], nums2 = [3,4]
输出： 2.50000
```

*提示*
-    `nums1.length == m`
-    `nums2.length == n`
-    `0 <= m <= 1000`
-    `0 <= n <= 1000`
-    `1 <= m + n <= 2000`
-    `-106 <= nums1[i], nums2[i] <= 106`

## 思路
这道题我在看到给出的示例后，第一想到的就是先把两个数组合并，然后排序，再取中位数。

但仔细一想，没必要合并之后再排序，给的两个数组已经是排好序的了，直接通过判断将两个数组的每一项按大小顺序依次存入新数组即可。

而且因为只需要找到中位数，所以并不需要全部遍历完，只需要将 `Math.floor((m + n) / 2) + 1` 个数存入数组即可，在通过判断中位数是一个还是两个，取最后存入的一或两个的平均值返回就完成了。

这里我用到了之前学到的指针，用两个指针分别指向两个数组的第一项，然后判断指向项的大小，将小的一项存入新数组，然后该指针指向下一项，直至新数组长度满足要求。

## 代码实现
```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const len1 = nums1.length
    const len2 = nums2.length
    // 如果两个数组长度都为0 直接返回0
    if (len1 === 0 && len2 === 0) return 0
    const index = Math.floor((len1 + len2) / 2)
    // 判断中位数个数   0 中间两个    1 一个    
    const count = (len1 + len2) % 2
    const temp = []
    // 两个指针分别指向第一项，如果数组长度为0，则指向 -1 不进行遍历
    let idx1 = len1 > 0 ? 0 : -1, 
        idx2 = len2 > 0 ? 0 : -1
    while(temp.length < index + 1) {
        // 如果第一个指针指向 -1，或 第一个指针指向的值大于第二个指针指向的值
        if ((idx1 < 0) || (idx2 >= 0 && nums1[idx1] > nums2[idx2])) {
            // 则将第二个指针指向的值存入新数组
            temp.push(nums2[idx2])
            // 第二个指针向后移动，如果已经是最后一项，则指向 -1 不再遍历该数组
            idx2 = (idx2 + 1) >= len2 ? -1 : (idx2 + 1)
        } else {
            temp.push(nums1[idx1])
            idx1 = (idx1 + 1) >= len1 ? -1 : (idx1 + 1)
        }
    }
    // 根据中位数个数 来取最后存入的中位数的值
    return count > 0 ? temp.pop() : (temp.pop() + temp.pop()) / 2
};
```