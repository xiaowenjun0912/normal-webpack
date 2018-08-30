// 引入$ 从我们安装的node_modules中
// es6标准的引包语法
// import $ from 'jquery'; // 引入jQuery 等同于 let $ = require('jquery');
// require 是 node.js 中 common.js
let $ = require('jquery');

// 引入 css 
// import './index.css';// 直接引入 不需要保存到变量中 等同于 require('./index.css');

// 引入 less文件
import './less/style.less';

// 声明了函数
function component() {
    // 创建div
    var element = document.createElement('div');
    // 设置内容
    element.innerHTML ='你好吗? (づ￣ 3￣)づ';
    // 使用jQ设置内容 依赖于jQ
    $(element).css({
        background:'skyblue',
        fontSize:'200px'
    })
    // 返回元素
    return element;
}

// 添加到body中
document.body.appendChild(component());