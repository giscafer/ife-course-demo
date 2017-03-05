import React from 'react'
import getSize from '../../../utils/getSize';
import  './Header.css';
export default class Header extends React.Component {

    constructor() {
        super()
        this.displayValue = 'none';
    }

    /**
     * 菜单绑定事件
     */
    menuClickHandler(e) {
        let block='inline-block';
        const {windowW} = getSize();
        if(windowW<800){
            block='block';
        }

        if (e && e.target && e.target.nodeName === 'SPAN' && block!=='block') {
            return;
        }
        if (this.displayValue === block) {
            this.displayValue = 'none';
        } else {
            this.displayValue = block;
        }
        this.refs.myMenu.style.display = this.displayValue;
    }

    render() {
        let {onFilterClick, filterType}=this.props;
        return (
            <header className="navbar navbar-static-top">
                <div className="container">
                    <div id="logo-nav" className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li><a href="../" id="logo" title="百度前端技术学院demo">百度前端技术学院demo</a></li>
                        </ul>
                    </div>
                    <div id="bs-navbar" className="navbar-collapse collapse">
                        <span className="btn" id="main-nav-toggle" onClick={() => this.menuClickHandler()}>菜单</span>
                        <ul className="nav navbar-nav" ref="myMenu">
                            <li className={ filterType === 'XIAOWEI' ? 'selected' : '' }><span
                                onClick={(e) => {
                                    this.menuClickHandler(e);
                                    onFilterClick('XIAOWEI')
                                }}>小薇学院</span></li>
                            <li className={ filterType === 'BINBIN' ? 'selected' : '' }><span
                                onClick={(e) => {
                                    this.menuClickHandler(e);
                                    onFilterClick('BINBIN')
                                }}>斌斌学院</span></li>
                            <li className={ filterType === 'YAOYAO' ? 'selected' : '' }><span
                                onClick={() => {
                                    this.menuClickHandler();
                                    onFilterClick('YAOYAO')
                                }}>耀耀学院</span></li>
                            <li className={ filterType === 'BUSINESS' ? 'selected' : '' }><span
                                onClick={() => {
                                    this.menuClickHandler();
                                    onFilterClick('BUSINESS')
                                }}>商业平台学院</span></li>
                            <li className={ filterType === 'ECHARTSVR' ? 'selected' : '' }><span
                                onClick={() => {
                                    this.menuClickHandler();
                                    onFilterClick('ECHARTSVR')
                                }}>Echarts & WebVR</span></li>
                            <li className={ filterType === 'NUOMI' ? 'selected' : '' }><span
                                onClick={() => {
                                    this.menuClickHandler();
                                    onFilterClick('NUOMI')
                                }}>百度糯米学院</span></li>
                        </ul>
                    </div>
                </div>
            </header>
        )
    }
}