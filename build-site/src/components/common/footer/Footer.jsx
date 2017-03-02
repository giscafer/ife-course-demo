import React from 'react'
import './Footer.css'
export default () => {
    return (
        <footer className="footer">
            <ul className="list-inline text-center">
                <li><a href="https://github.com/giscafer/" target="_blank">giscafer © 2017</a></li>
                <li className="phone">ife-course-demo</li>
                <li className="phone"><a href="https://github.com/giscafer/ife-course-demo/issues/" target="_blank">意见反馈</a></li>
                <li className="phone"><a href="https://github.com/giscafer/ife-course-demo/" target="_blank">Star Me</a></li>
            </ul>
           <p>推荐关注微信公众号：giscafer</p>
        </footer>
    )
}