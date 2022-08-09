import{_ as s,c as n,o as a,a as l}from"./app.b4d3744e.js";var p="/assets/leetcode_11.400006d6.jpg";const b=JSON.parse('{"title":"LeetCode11\u3001\u76DB\u6700\u591A\u6C34\u7684\u5BB9\u5668","description":"","frontmatter":{"title":"LeetCode11\u3001\u76DB\u6700\u591A\u6C34\u7684\u5BB9\u5668","tags":["LeetCode","\u5B66\u4E60\u7B14\u8BB0"],"categories":"LeetCode\u5237\u9898\u8BB0\u5F55"},"headers":[{"level":2,"title":"\u9898\u76EE","slug":"\u9898\u76EE"},{"level":2,"title":"\u601D\u8DEF","slug":"\u601D\u8DEF"},{"level":2,"title":"\u4EE3\u7801\u5B9E\u73B0","slug":"\u4EE3\u7801\u5B9E\u73B0"},{"level":2,"title":"\u4F18\u5316","slug":"\u4F18\u5316"}],"relativePath":"other/leetcode/leetcode11.md","lastUpdated":1660017189000}'),o={name:"other/leetcode/leetcode11.md"},e=l('<h1 id="leetcode11\u3001\u76DB\u6700\u591A\u6C34\u7684\u5BB9\u5668" tabindex="-1">LeetCode11\u3001\u76DB\u6700\u591A\u6C34\u7684\u5BB9\u5668 <a class="header-anchor" href="#leetcode11\u3001\u76DB\u6700\u591A\u6C34\u7684\u5BB9\u5668" aria-hidden="true">#</a></h1><h2 id="\u9898\u76EE" tabindex="-1">\u9898\u76EE <a class="header-anchor" href="#\u9898\u76EE" aria-hidden="true">#</a></h2><p>\u7ED9\u5B9A\u4E00\u4E2A\u957F\u5EA6\u4E3A <code>n</code> \u7684\u6574\u6570\u6570\u7EC4\xA0<code>height</code>\xA0\u3002\u6709\xA0<code>n</code>\xA0\u6761\u5782\u7EBF\uFF0C\u7B2C <code>i</code> \u6761\u7EBF\u7684\u4E24\u4E2A\u7AEF\u70B9\u662F\xA0<code>(i, 0)</code>\xA0\u548C\xA0<code>(i, height[i])</code>\xA0\u3002</p><p>\u627E\u51FA\u5176\u4E2D\u7684\u4E24\u6761\u7EBF\uFF0C\u4F7F\u5F97\u5B83\u4EEC\u4E0E\xA0<code>x</code>\xA0\u8F74\u5171\u540C\u6784\u6210\u7684\u5BB9\u5668\u53EF\u4EE5\u5BB9\u7EB3\u6700\u591A\u7684\u6C34\u3002</p><p>\u8FD4\u56DE\u5BB9\u5668\u53EF\u4EE5\u50A8\u5B58\u7684\u6700\u5927\u6C34\u91CF\u3002</p><p>\u8BF4\u660E\uFF1A\u4F60\u4E0D\u80FD\u503E\u659C\u5BB9\u5668\u3002</p><p><em>\u793A\u4F8B\uFF1A</em></p><p><img src="'+p+`" alt="image.png"></p><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u8F93\u5165\uFF1A[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">6</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">7</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">\u8F93\u51FA\uFF1A</span><span style="color:#F78C6C;">49</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">\u89E3\u91CA\uFF1A\u56FE\u4E2D\u5782\u76F4\u7EBF\u4EE3\u8868\u8F93\u5165\u6570\u7EC4 [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">6</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">7</span><span style="color:#A6ACCD;">]\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5728\u6B64\u60C5\u51B5\u4E0B\uFF0C\u5BB9\u5668\u80FD\u591F\u5BB9\u7EB3\u6C34\uFF08\u8868\u793A\u4E3A\u84DD\u8272\u90E8\u5206\uFF09\u7684\u6700\u5927\u503C\u4E3A\xA0</span><span style="color:#F78C6C;">49</span><span style="color:#A6ACCD;">\u3002</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><em>\u63D0\u793A</em></p><ul><li><code>n == height.length</code></li><li>2 &lt;= n &lt;= 10<sup>5</sup></li><li>0 &lt;= height[i] &lt;= 10<sup>4</sup></li></ul><h2 id="\u601D\u8DEF" tabindex="-1">\u601D\u8DEF <a class="header-anchor" href="#\u601D\u8DEF" aria-hidden="true">#</a></h2><p>\u7B2C\u4E00\u773C\uFF0C\u66B4\u529B\u89E3\u6CD5\uFF0C\u53CC\u91CD\u5FAA\u73AF\u5C06\u6240\u6709\u7ED3\u679C\u904D\u5386\u4E00\u904D\uFF0C\u7ED3\u679C\u76F4\u63A5\u7ED9\u6211\u6765\u4E86\u4E2A\u8D85\u65F6\u8B66\u544A\uFF0C\u54C8\u54C8</p><p>\u8FD8\u662F\u60F3\u60F3\u5176\u4ED6\u65B9\u6CD5\u5427\uFF0C\u65E2\u7136\u662F\u6C42\u6700\u5927\u7684\u9762\u79EF\uFF0C\u90A3\u5C31\u5148\u4ECE\u6700\u5927\u5E95\u8FB9\u5F00\u59CB\u8BA1\u7B97</p><p>\u901A\u8FC7\u4E24\u4E2A\u6307\u9488\u6307\u5411\u5934\u5C3E\uFF0C\u7136\u540E\u8BA1\u7B97\u9762\u79EF\u8BB0\u5F55\u4E0B\u6765\uFF0C\u7136\u540E\u79FB\u52A8\u8F83\u77ED\u7684\u6307\u9488\uFF0C\u7EE7\u7EED\u8BA1\u7B97\u9762\u79EF\u5E76\u4E0E\u8BB0\u5F55\u7684\u9762\u79EF\u6BD4\u8F83\uFF0C\u66F4\u65B0\u6700\u5927\u9762\u79EF</p><p>\u76F4\u81F3\u6700\u540E\u4E24\u6307\u9488\u76F8\u9047\uFF0C\u8FD4\u56DE\u8BB0\u5F55\u7684\u9762\u79EF\u5373\u53EF</p><h2 id="\u4EE3\u7801\u5B9E\u73B0" tabindex="-1">\u4EE3\u7801\u5B9E\u73B0 <a class="header-anchor" href="#\u4EE3\u7801\u5B9E\u73B0" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">param</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#89DDFF;font-style:italic;">{</span><span style="color:#FFCB6B;font-style:italic;">number[]</span><span style="color:#89DDFF;font-style:italic;">}</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#A6ACCD;font-style:italic;">height</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">return</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#89DDFF;font-style:italic;">{</span><span style="color:#FFCB6B;font-style:italic;">number</span><span style="color:#89DDFF;font-style:italic;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> maxArea </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">height</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">len</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">height</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// x  y  \u5206\u522B\u6307\u5411\u5F00\u5934\u548C\u7ED3\u5C3E  max \u8BB0\u5F55\u6700\u5927\u9762\u79EF</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">max</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">y</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">len</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!==</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">y</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// \u8BA1\u7B97\u5F53\u524D\u4E24\u4E2A\u6307\u9488\u4E4B\u95F4\u7684\u9762\u79EF</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">area</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">min</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">height</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">height</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">y</span><span style="color:#F07178;">]) </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">y</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// \u6BD4\u8F83\u8BB0\u5F55</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">max</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">area</span><span style="color:#F07178;">) </span><span style="color:#A6ACCD;">max</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">area</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// \u79FB\u52A8\u8F83\u77ED\u7684\u6307\u9488</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">height</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">height</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">y</span><span style="color:#F07178;">]) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">++</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">y</span><span style="color:#89DDFF;">--</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">max</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="\u4F18\u5316" tabindex="-1">\u4F18\u5316 <a class="header-anchor" href="#\u4F18\u5316" aria-hidden="true">#</a></h2><p>\u9898\u89E3\u91CC\u7684\u5927\u591A\u90FD\u662F\u7528\u7684\u53CC\u6307\u9488\u7684\u601D\u8DEF\uFF0C\u6240\u4EE5\u6211\u5C31\u53C2\u8003\u7740\u5C06\u6211\u7684\u4EE3\u7801\u7B80\u6D01\u5316\u4E00\u70B9\uFF1A</p><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">param</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#89DDFF;font-style:italic;">{</span><span style="color:#FFCB6B;font-style:italic;">number[]</span><span style="color:#89DDFF;font-style:italic;">}</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#A6ACCD;font-style:italic;">height</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">return</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#89DDFF;font-style:italic;">{</span><span style="color:#FFCB6B;font-style:italic;">number</span><span style="color:#89DDFF;font-style:italic;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> maxArea </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">height</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// x  y  \u5206\u522B\u6307\u5411\u5F00\u5934\u548C\u7ED3\u5C3E  max \u8BB0\u5F55\u6700\u5927\u9762\u79EF</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">max</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">y</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">height</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">y</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// \u8BA1\u7B97\u5F53\u524D\u4E24\u4E2A\u6307\u9488\u4E4B\u95F4\u7684\u9762\u79EF \u5E76\u79FB\u52A8\u8F83\u77ED\u7684\u6307\u9488</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">area</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">y</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> (</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">height</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">height</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">y</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">?</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">height</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">height</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">y</span><span style="color:#89DDFF;">--</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#F07178;">        )</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// \u6BD4\u8F83\u8BB0\u5F55</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">max</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">max</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">max</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">area</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">max</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>`,21),t=[e];function c(r,y,F,i,D,C){return a(),n("div",null,t)}var d=s(o,[["render",c]]);export{b as __pageData,d as default};
