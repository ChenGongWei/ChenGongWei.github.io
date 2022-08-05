---
title: LeetCode5、最长回文子串
tags: [LeetCode, 学习笔记]
categories: LeetCode刷题记录
---

# LeetCode5、最长回文子串

## 题目
给你一个字符串 `s`，找到 `s` 中最长的回文子串。

*示例：*
```js
输入： s = "babad"
输出： "bab"
解释： "aba" 同样是符合题意的答案。

输入： s = "cbbd"
输出： "bb"
```

*提示*
-    `1 <= s.length <= 1000`
-    `s` 仅由数字和英文字母组成

## 思路
回文字符串指的是正序和逆序都一样的字符串

既然题目是要找最长的回文子串，那最先看到肯定是整个字符串是否是回文字符串，然后再找 `len - 1` 的子串去判断，这样效率最高

所以解题思路就是先从最长的子串开始判断，然后依次递减子串长度去遍历判断，只要找到答案就结束

判断是否是回文字符串的方法用的是双指针的方式，左右指针分别从字符串头尾开始往中间移动，如果两个指针指向的字符相同则继续移动，否则判断为 `false`，最后两个指针相交后返回 `true`

## 代码实现
```js
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const len = s.length // 字符串长度
    let max = len // 子串开始长度
    while(true) {
        // 长度为 max 的子串，在 s 里只存在 (len - max + 1) 个，所以以这个为循环条件
        for(let j = 0; j < (len - max + 1); j++) {
            // 从下标 j 开始，截取 max 长度的子串
            let tempStr = s.substr(j, max)
            // 判断该子串是否为回文字符串，是则返回改字符串
            if(isPalindromeString(tempStr)) {
                return tempStr
            }
        }
        // 子串长度递减
        max--
    }
};

/**
 * 判断字符串是不是回文字符串
 * @param {string} str
 * @return {boolean}
 */
var isPalindromeString = function(str) {
    let idx1 = 0,  // 左指针
        idx2 = str.length - 1  // 右指针
    while(idx1 < idx2) { // 结束条件 左指针超过右指针
        // 当左右指针指向的字符不同时，判定不是回文字符串返回 false
        if(str[idx1] !== str[idx2]) {
            return false
        } else {
            // 左右指针均移动一位
            idx1++
            idx2--
        }
    }
    // 全部都经过了判断 则判定为是回文字符串返回 true
    return true
}
```

## 优化
在题解中看到一种 `中心扩散法`，

从第一个字符开始遍历，两个指针从遍历字符往左右两个方向扩散

两个指针指向的字符相同且指针间字符数大于记录的最大回文字符长度，则更新开始位置及长度并继续扩散

直至一个指针碰到边界或两个指针指向的字符不同时则退出本次扩散遍历下一个字符

```js
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {

    const len = s.length 
    let start = 0, // 开始位置
        max = 1 // 最大长度

    function getPalindrome(left, right) {
        // 结束条件  到达边界 或 两个字符不相等
        while(left >= 0 && right < len && s[left] === s[right]) {
            // 长度大于 max 则更新 start 和 max
            if ((right - left + 1) > max) {
                max = right - left + 1
                start = left
            }
            // 继续扩散
            left--
            right++
        }
    }

    for(let i = 0; i < len; i++) {
        // 回文字符串长度为奇数
        getPalindrome(i - 1, i + 1)
        // 回文字符串长度为偶数
        getPalindrome(i, i + 1)
    }

    return s.substr(start, max)
};

```