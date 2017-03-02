/**
 * Created by giscafer on 2017/3/2.
 */
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/common/header/Header'
import goodAction from '../actions/goods'


class HeaderContainer extends Component{


    render() {
        let {queryList,goods={}}=this.props;
        return (
            <Header  onFilterClick={queryList} filterType={goods.qryType}/>
        )
    }
}


function mapStateToProps(state){
    return {
        goods:state.goods
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(goodAction,dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(HeaderContainer)




