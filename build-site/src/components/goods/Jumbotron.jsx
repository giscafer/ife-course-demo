/**
 * 商品链接输入框UI组件
 */
import React from 'react'
import  './Jumbotron.css';

export default ()=>{
    return (
        <div id="banner">
            <br/>
             <h2>百度前端技术学院习题demo</h2><br/>
             <small>习题正在学习中，持续更新……</small>
            <div className="jumbotron-btn">
                <a href="http://ife.baidu.com/" target="_blank" className="btn btn-default">进入百度学院官网</a>
                <a  href="https://github.com/giscafer/ife-course-demo" target="_blank" className="btn btn-default">习题demo源码</a>
            </div>
        </div>
    )
}