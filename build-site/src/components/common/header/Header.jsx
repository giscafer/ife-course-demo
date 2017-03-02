import React from 'react'
import  './Header.css'
export default ({onFilterClick}) => {
    return (
        <header className="navbar navbar-static-top">
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li><a href="../" id="logo" title="百度前端技术学院demo">百度前端技术学院demo</a></li>
                    </ul>
                </div>
                <div id="bs-navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li><span onClick={() => onFilterClick('XIAOWEI')}>小薇学院</span></li>
                        <li><span onClick={() => onFilterClick('BINBIN')} className="link-active">斌斌学院</span></li>
                        <li><span onClick={() => onFilterClick('YAOYAO')}>耀耀学院</span></li>
                        <li><span onClick={() => onFilterClick('BUSINESS')}>商业平台学院</span></li>
                        <li><span onClick={() => onFilterClick('ECHARTSVR')}>Echarts & WebVR</span></li>
                        <li><span onClick={() => onFilterClick('NUOMI')}>百度糯米学院</span></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}