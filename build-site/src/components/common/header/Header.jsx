import React from 'react'
import  './Header.css'
export default ({onFilterClick}) => {
    return (
        <header className="navbar navbar-static-top">
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li><a href="../" id="logo" title="价格监测">Ponitor</a></li>
                    </ul>
                </div>
                <div id="bs-navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li><span onClick={() => onFilterClick('xiaowei')}>小薇学院</span></li>
                        <li><span onClick={() => onFilterClick('jd')} className="link-active">斌斌学院</span></li>
                        <li><span onClick={() => onFilterClick('alibaba')}>耀耀学院</span></li>
                        <li><span onClick={() => onFilterClick('apple')}>商业平台学院</span></li>
                        <li><span onClick={() => onFilterClick('apple')}>Echarts & WebVR</span></li>
                        <li><span onClick={() => onFilterClick('apple')}>百度糯米学院</span></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}