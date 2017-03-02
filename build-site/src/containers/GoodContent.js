import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import GoodList from '../components/goods/GoodList'
import goodAction from '../actions/goods'


class GoodContent extends Component{
    componentWillMount(){
        const {queryList} = this.props;
        queryList('XIAOWEI')
    }

    render(){
       let {goods}=this.props;
       return (
            <div className="main-container">
                <GoodList goods={goods}/>
            </div>
       )
    }
}


function mapStateToProps(state){
    console.log(state.goods)
    return {
        goods:state.goods
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(goodAction,dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(GoodContent)




