import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import GoodList from '../components/goods/GoodList'
import goodAction from '../actions/goods'


class GoodContent extends Component{
    componentWillMount(){
        const {queryList} = this.props;
        queryList('XIAOWEI');
    }

    render(){
       let {good}=this.props;
       return (
            <div className="main-container">
                <GoodList goods={good.goods}/>
            </div>
       )
    }
}


function mapStateToProps(state){
    console.log(state.goods)
    return {
        good:state.goods
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(goodAction,dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(GoodContent)




