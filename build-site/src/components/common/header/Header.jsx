import React from 'react'
import  './Header.css'
export default ({onFilterClick,filterType}) => {
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
                        <li className={ filterType === 'XIAOWEI' ? 'selected' : '' }><span onClick={() => onFilterClick('XIAOWEI')}>小薇学院</span></li>
                        <li className={ filterType === 'BINBIN' ? 'selected' : '' }><span onClick={() => onFilterClick('BINBIN')}>斌斌学院</span></li>
                        <li className={ filterType === 'YAOYAO' ? 'selected' : '' }><span onClick={() => onFilterClick('YAOYAO')}>耀耀学院</span></li>
                        <li className={ filterType === 'BUSINESS' ? 'selected' : '' }><span onClick={() => onFilterClick('BUSINESS')}>商业平台学院</span></li>
                        <li className={ filterType === 'ECHARTSVR' ? 'selected' : '' }><span onClick={() => onFilterClick('ECHARTSVR')}>Echarts & WebVR</span></li>
                        <li className={ filterType === 'NUOMI' ? 'selected' : '' }><span onClick={() => onFilterClick('NUOMI')}>百度糯米学院</span></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}