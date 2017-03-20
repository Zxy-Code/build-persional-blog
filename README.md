# 使用nodejs和markdown语法来搭建个人博客
## 工具
1.node.js  主要工具
2.markdown  markdown的语法，能让我们方便的再github上写自己的东西
3.typo.css  给使用markdown写好的文章增加样式
## 主要代码
* node.js
```
var fs = require('fs');
var path = require('path');
var markedPath = path.join('./marked', files[i]);
var markdownContent = fs.readFileSync(markedPath).toString();
var template = fs.readFileSync('./template.html').toString();
var htmlText = template.replace('%markdown%',markdownContent);
fs.writeFileSync(files[i]+'.html',htmlText);
```
