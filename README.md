# lsvggg
<h4>练习npm工具更新，dom，svg和事件监听。</h4>
<h3>基于vue3.0简易svg点位生成器</h3>
<h2>安装 npm i lsvggg</h2>
<h2>起始配置</h2>
<h4>template区域</h4>
<div @click='方法'></div>

<h4>script区域</h4>
  const getPoints = require('lsvggg');
  
  methods:{
    方法(event){
      getPoinits(events)
    }
  }
<h3>使用方法</h3>
左键点击，space生成svg，enter结束当前svg绘制,进入下一个svg绘制，步骤同上.
esc导出点位
