# shanbay-task
intern task

task 

我们希望你能写一个 Chrome 插件，这个插件能实现下面几个功能：

1. 当前的页面内容太多，我们希望你能将除了正文之外的（标题和新闻配图需要保留）其他内容过滤掉。 我们不需要你针对每一篇文章都能实现广告过滤，这可能需要相当长的时间。 我们的要求是当前这篇文章。 但如果能在每个页面都能实现，会有很多加分。

2. 因为这个页面特别长，不适合在小屏幕上直接阅读，需要拖动。 我们希望你能根据屏幕的大小进行分页， 通过显示不同的页码可以去到不同的页面，鼠标点击即可。 注意，页面中图片需要保留。需要适配不同的屏幕，我们希望你能做好屏幕匹配测试。

3. 我们希望你的插件能通过扇贝的 API 来实现查词。 具体做法是，点击页面上任何一个单词，可以在弹出框里显示单词的发音和含义，点击喇叭可以发音。 弹出框应当在单词的边上，不要离开的太远。用户点击的时候，单词可能会出现在边界 （Top， right， bottom ，left），我们希望你能正确处理弹出框的位置。 扇贝的 API 请自行到扇贝网网站查找。 

完成情况

1. （http://www.theguardian.com） 母网页下的每个新闻广告过滤

2. 分页

3. 扇贝API双击查词，发音（发音功能有CHROME CSP内容安全策略的阻碍）使用了GIT上找到的插件作为background.js

  "description": "Disable content-security-policy for web application testing"
  
  "author": "Phil Grayson"
  
  "homepage_url": "https://github.com/PhilGrayson/chrome-csp-disable"

总结一下：

1. 第一个功能使用chrome扩展的content_scripts在网页中嵌入JS找到广告然后remove掉。

2. 第二个功能找到window和body的高度以后做数学运算然后分页。

3. 第三个功能使用jquery的$.get()函数请求API查词，触发查词的是双击dbclick事件，获取选中单词的是window.getSelection().toString()，然后查词
 发音的时候出现了问题，浏览器报错说不安全Content Security Policy (CSP)，然后我搞了一会没搞定，我就在网上下了个脚本作为background.js加载在后台 
 完成了发音的调用（使用HTML5的新标签audio.play）。
