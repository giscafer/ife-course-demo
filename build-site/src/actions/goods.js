
import goodService from '../service/goodService'

// Action Type
const FETCH_GOOD = 'FETCH_GOOD'
const ADD_GOOD = 'ADD_GOOD'
const DEL_GOOD = 'DEL_GOOD'

// Action Creator


const fetchGood = (type, dispatch) => {
    goodService.query(type, (goods) => {
        sessionStorage[type] = JSON.stringify(goods);
        dispatch({
            type: FETCH_GOOD,
            payload: goods
        })
    })
}
// 设计一次查询所有商品时，前端sessionStorage保存，查询其他类别不走请求
const queryList = type => dispatch => {
    if (!sessionStorage[type]) {
        fetchGood(type, dispatch)
    } else {
        let goods=sessionStorage[type] && JSON.parse(sessionStorage[type]);
        if (goods && goods.length) {
            dispatch({
                type: FETCH_GOOD,
                payload: goods
            })
        }
    }
}
export default {
    queryList
}

// 参考网友的写法
// ================================
// Action handlers for Reducer
// 本来更新 state 是 Reducer 的责任
// 但要把 ActionType 导出又引入实在太麻烦
// 且在 Reducer 中写 switch-case 实在太不优雅
// 故在此直接给出处理逻辑
// ================================
export const ACTION_HANDLERS = {
    [FETCH_GOOD]: (goods, {payload}) => payload
}