import{_ as s,c as n,o as a,a as l}from"./app.b4d3744e.js";const A=JSON.parse('{"title":"LeetCode9\u3001\u56DE\u6587\u6570","description":"","frontmatter":{"title":"LeetCode9\u3001\u56DE\u6587\u6570","tags":["LeetCode","\u5B66\u4E60\u7B14\u8BB0"],"categories":"LeetCode\u5237\u9898\u8BB0\u5F55"},"headers":[{"level":2,"title":"\u9898\u76EE","slug":"\u9898\u76EE"},{"level":2,"title":"\u601D\u8DEF","slug":"\u601D\u8DEF"},{"level":2,"title":"\u4EE3\u7801\u5B9E\u73B0","slug":"\u4EE3\u7801\u5B9E\u73B0"},{"level":2,"title":"\u4F18\u5316","slug":"\u4F18\u5316"}],"relativePath":"other/leetcode/leetcode9.md","lastUpdated":1660025432000}'),p={name:"other/leetcode/leetcode9.md"},o=l(`<h1 id="leetcode9\u3001\u56DE\u6587\u6570" tabindex="-1">LeetCode9\u3001\u56DE\u6587\u6570 <a class="header-anchor" href="#leetcode9\u3001\u56DE\u6587\u6570" aria-hidden="true">#</a></h1><h2 id="\u9898\u76EE" tabindex="-1">\u9898\u76EE <a class="header-anchor" href="#\u9898\u76EE" aria-hidden="true">#</a></h2><p>\u7ED9\u4F60\u4E00\u4E2A\u6574\u6570 <code>x</code> \uFF0C\u5982\u679C <code>x</code> \u662F\u4E00\u4E2A\u56DE\u6587\u6574\u6570\uFF0C\u8FD4\u56DE <code>true</code> \uFF1B\u5426\u5219\uFF0C\u8FD4\u56DE <code>false</code> \u3002</p><p>\u56DE\u6587\u6570\u662F\u6307\u6B63\u5E8F\uFF08\u4ECE\u5DE6\u5411\u53F3\uFF09\u548C\u5012\u5E8F\uFF08\u4ECE\u53F3\u5411\u5DE6\uFF09\u8BFB\u90FD\u662F\u4E00\u6837\u7684\u6574\u6570\u3002</p><p>\u4F8B\u5982\uFF0C<code>121</code> \u662F\u56DE\u6587\uFF0C\u800C <code>123</code> \u4E0D\u662F\u3002</p><div class="info custom-block"><p class="custom-block-title">\u793A\u4F8B</p><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u8F93\u5165\uFF1A x </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">121</span></span>
<span class="line"><span style="color:#A6ACCD;">\u8F93\u51FA\uFF1A </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#A6ACCD;">\u89E3\u91CA\uFF1A \u4ECE\u5DE6\u5411\u53F3\u8BFB</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> \u4E3A </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">121</span><span style="color:#A6ACCD;"> \u3002 \u4ECE\u53F3\u5411\u5DE6\u8BFB</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> \u4E3A </span><span style="color:#F78C6C;">121</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> \u3002\u56E0\u6B64\u5B83\u4E0D\u662F\u4E00\u4E2A\u56DE\u6587\u6570\u3002</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">\u8F93\u5165\uFF1A x </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">121</span></span>
<span class="line"><span style="color:#A6ACCD;">\u8F93\u51FA\uFF1A </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">\u8F93\u5165\uFF1A x </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span></span>
<span class="line"><span style="color:#A6ACCD;">\u8F93\u51FA\uFF1A </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#A6ACCD;">\u89E3\u91CA\uFF1A \u4ECE\u53F3\u5411\u5DE6\u8BFB</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> \u4E3A </span><span style="color:#F78C6C;">01</span><span style="color:#A6ACCD;"> \u3002\u56E0\u6B64\u5B83\u4E0D\u662F\u4E00\u4E2A\u56DE\u6587\u6570\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></div><div class="tip custom-block"><p class="custom-block-title">\u63D0\u793A:</p><ul><li>-2<sup>31</sup> &lt;= x &lt;= 2<sup>31</sup> - 1</li><li>\u4F60\u80FD\u4E0D\u5C06\u6574\u6570\u8F6C\u4E3A\u5B57\u7B26\u4E32\u6765\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u5417\uFF1F</li></ul></div><h2 id="\u601D\u8DEF" tabindex="-1">\u601D\u8DEF <a class="header-anchor" href="#\u601D\u8DEF" aria-hidden="true">#</a></h2><p>\u8FD9\u4E2A\u9898\u76EE\u521A\u5F00\u59CB\u6211\u662F\u6253\u7B97\u5C06\u5176\u8F6C\u4E3A\u5B57\u7B26\u4E32\uFF0C\u7136\u540E\u901A\u8FC7\u4E24\u4E2A\u6307\u9488\u4ECE\u4E24\u8FB9\u79FB\u52A8\u5230\u4E2D\u95F4\uFF0C\u671F\u95F4\u5982\u679C\u6307\u5411\u7684\u6570\u5B57\u4E0D\u76F8\u540C\uFF0C\u5219\u8FD4\u56DE <code>false</code></p><p>\u4F46\u662F\u53C8\u7ED9\u4E86\u4E2A\u63D0\u793A\u5E0C\u671B\u53EF\u4EE5\u4E0D\u8F6C\u4E3A\u5B57\u7B26\u4E32\u6765\u89E3\u51B3\uFF0C\u90A3\u53EA\u80FD\u8003\u8651\u5176\u4ED6\u65B9\u6CD5\u4E86</p><p>\u65E2\u7136\u56DE\u6587\u6570\u662F\u6B63\u5E8F\u548C\u5012\u5E8F\u8BFB\u90FD\u4E00\u6837\u7684\u6574\u6570\uFF0C\u90A3\u4E48\u6211\u4EEC\u9996\u5148\u5C31\u53EF\u4EE5\u628A\u8D1F\u6570\u76F4\u63A5\u6392\u9664\u6389\uFF0C\u7136\u540E\u5C0F\u4E8E <code>10</code> \u7684\u4E5F\u53EF\u4EE5\u76F4\u63A5\u5224\u5B9A\u4E3A <code>true</code></p><p>\u5269\u4E0B\u7684\u6211\u4EEC\u53EF\u4EE5\u7528\u5230\u4E4B\u524D <em>\u6574\u6570\u53CD\u8F6C</em> \u91CC\u7684\u65B9\u6CD5\uFF0C\u5148\u5C06\u6574\u6570\u53CD\u8F6C\uFF0C\u7136\u540E\u4E0E\u539F\u6570\u6BD4\u8F83\uFF0C\u76F8\u540C\u5219\u8FD4\u56DE <code>true</code></p><h2 id="\u4EE3\u7801\u5B9E\u73B0" tabindex="-1">\u4EE3\u7801\u5B9E\u73B0 <a class="header-anchor" href="#\u4EE3\u7801\u5B9E\u73B0" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">param</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#89DDFF;font-style:italic;">{</span><span style="color:#FFCB6B;font-style:italic;">number</span><span style="color:#89DDFF;font-style:italic;">}</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#A6ACCD;font-style:italic;">x</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">return</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#89DDFF;font-style:italic;">{</span><span style="color:#FFCB6B;font-style:italic;">boolean</span><span style="color:#89DDFF;font-style:italic;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> isPalindrome </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \u5C0F\u4E8E 0 \u76F4\u63A5\u8FD4\u56DE false</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 0 ~ 9 \u8FD4\u56DE true</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">10</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// result \u7528\u6765\u5B58\u50A8\u53CD\u8F6C\u540E\u7684\u6574\u6570</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">result</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">temp</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">temp</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!==</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">result</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">result</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">10</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">temp</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">%</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">10</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">temp</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">temp</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">/</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">10</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \u6700\u540E\u8FD4\u56DE\u662F\u5426\u76F8\u7B49</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">result</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="\u4F18\u5316" tabindex="-1">\u4F18\u5316 <a class="header-anchor" href="#\u4F18\u5316" aria-hidden="true">#</a></h2><p>\u770B\u4E86\u9898\u89E3\uFF0C\u6709\u4E2A\u65B9\u6CD5\u662F\u53D6\u51FA\u6574\u6570\u7684\u5934\u5C3E\u6570\u5B57\u8FDB\u884C\u5224\u65AD\uFF0C\u4E0D\u76F8\u7B49\u5219\u8FD4\u56DE <code>false</code> \uFF0C\u5426\u5219\u53D6\u4E0B\u4E00\u7EC4\u5934\u5C3E\u6570\u5B57\uFF0C\u76F4\u81F3\u5168\u90E8\u53D6\u5B8C</p><p>\u521A\u5F00\u59CB\u6211\u4E5F\u60F3\u5230\u4E86\u8FD9\u79CD\u65B9\u6CD5\uFF0C\u4F46\u662F\u6CA1\u6709\u60F3\u5230\u600E\u4E48\u53D6\u51FA\u5934\u90E8\u7684\u6570\u5B57\uFF0C\u6240\u4EE5\u5C31\u6CA1\u6709\u7528\u8FD9\u79CD\u65B9\u6CD5\uFF0C\u6CA1\u60F3\u5230\u5728\u9898\u89E3\u91CC\u770B\u5230\u4E86</p><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">param</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#89DDFF;font-style:italic;">{</span><span style="color:#FFCB6B;font-style:italic;">number</span><span style="color:#89DDFF;font-style:italic;">}</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#A6ACCD;font-style:italic;">x</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">return</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#89DDFF;font-style:italic;">{</span><span style="color:#FFCB6B;font-style:italic;">boolean</span><span style="color:#89DDFF;font-style:italic;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> isPalindrome </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \u5C0F\u4E8E 0 \u76F4\u63A5\u8FD4\u56DE false</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 0 ~ 9 \u8FD4\u56DE true</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">10</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \u83B7\u53D6 x \u7684\u91CF\u7EA7  \u4F8B 1931 -&gt; 1000</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">n</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">10</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">**</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">floor</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log10</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">n</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// \u5982\u679C\u5934\u5C3E\u6570\u5B57\u4E0D\u540C  \u8FD4\u56DE false</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">floor</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">/</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">n</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">!==</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">%</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">10</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// \u5C06\u5934\u5C3E\u6570\u5B57\u53BB\u6389</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">floor</span><span style="color:#F07178;">((</span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">%</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">n</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">/</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">10</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// \u6570\u91CF\u7EA7\u4E0B\u964D\u4E24\u4F4D</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">n</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">/=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>`,18),e=[o];function t(c,r,y,F,i,D){return a(),n("div",null,e)}var b=s(p,[["render",t]]);export{A as __pageData,b as default};