
import createReducer from '../utils/createReducer'
import { ACTION_HANDLERS } from '../actions/goods'
import initState from '../stores/initState'

export default createReducer(initState.good.goods, ACTION_HANDLERS)