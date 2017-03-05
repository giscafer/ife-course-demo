/**
 * Created by giscafer on 2017/3/5.
 */

import React from 'react';
import getSize from '../../utils/getSize'

// const {windowH,windowW} = getSize()
const style = {
    display:'block',
    color:'red',
    width:'100%',
    textAlign:'center',
    margin:'30px auto'

}
const CircleLoading = () => (
    <p style={style}>加载中……</p>
);

export default CircleLoading;