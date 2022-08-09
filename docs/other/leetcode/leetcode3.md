---
title: LeetCode3、无重复字符的最长子串
tags: [LeetCode, 学习笔记]
categories: LeetCode刷题记录
---

# LeetCode3、无重复字符的最长子串

## 题目
给定一个字符串 `s` ，请你找出其中不含有重复字符的 **最长子串** 的长度。


*示例：*
```js
输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

输入: s = "bbbbb"
输出: 1

输入: s = "pwwkew"
输出: 3
```

*提示*
-   0 <= s.length <= 5 * 10^4^
-   `s` 由英文字母、数字、符号和空格组成

## 思路
看到这个题目的第一眼，我想到的就是使用双重循环来遍历它，然后通过比较将最长的子串存储起来，最后返回存储的字串的长度。

当然一开始如果传入的字符串长度为 `0` 或 `1` 时可以直接返回长度，不需要进行处理。

这里我用了第一题里学到的 `Map` 来进行存储子串，判断起来比数组方便些。

## 代码实现
```js
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const len = s.length
    // 长度不大于 1 直接返回
    if (len < 2) return len
    let max = 0
    for(let i = 0; i < len - 1; i++) {
        const res = new Map()
        // 将当前项存入map
        res.set(s[i], 1)
        for(let j = i + 1; j < len; j++) {
            // 如果map里存在此项 则跳出内层循环
            if (res.has(s[j])) break
            // 否则将此项存入map
            res.set(s[j], 1)
        }
        // 内层循环结束 判断子串长度是否大于已记录的长度
        max = res.size > max ? res.size : max
    }
    return max
};
```

## 优化
看了下别人的题解，提到一个概念 `滑动窗口`，通过两个指针和一个 `set` 实现：
-   用一个 `set` 存储窗口内的元素

-   当前右指针指向的字符在 `set` 内没有重复字符时：
    - 将字符存入 `set` 
    - 判断当前 `set` 长度和记录的最大长度
    - 右指针继续地向右移动


-   右指针指向的字符在 `set` 有重复时：
    - 移动左指针并从 `set` 移除对应字符直至没有重复
    - 将字符存入 `set`
    - 右指针继续向右移动边界限向右移动

-   直到右指针指到最后一个字符，返回记录的最大长度
```js
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const len = s.length
    if (len < 2) return len
    let i = 0, //  左指针
        j = 0, //  右指针
        max = 0 // 最大长度
    const res = new Set()
    while(j < len) {
        // 如果res里存在当前字符
        if (res.has(s[j])) {
            // 移动左指针删除字符，直至没有重复项
            while(res.has(s[j])) {
                res.delete(s[i])
                i++
            }
        }
        // 将右指针指向的字符存入res
        res.add(s[j])
        // 记录最大长度
        max = Math.max(max, res.size)
        j++
    }
    return max
};
```