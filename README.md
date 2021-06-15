# lsvggg

# 基于vue3.0简易svg点位生成器

##### 练习npm工具更新，dom，svg和事件监听。

# 安装 

##### npm i lsvggg

### 起始配置

#### template区域

```html
<div @click='方法'>
```

#### script区域

```javascript
const getPoints = require('lsvggg');

  methods:{
    方法(event){
      getPoinits(events)
    }
  }
```

<h4>使用方法</h4>
##### 左键点击

##### space生成svg

##### enter结束当前svg绘制,进入下一个svg绘制，步骤同上.

##### esc导出点位
