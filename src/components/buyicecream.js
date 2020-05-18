import React, { Component } from 'react'
import { connect } from 'react-redux';
import {buyicecream} from '../redux/actions/buycake';

const Buyicecream = (props)=>{
    console.log("function ice cream...")
    return (
        <div>
            <p>Total Ice-Cream : {props.numberOfice}</p>
            <button onClick={props.BuyIce}>Buy Ice-cream</button>
        </div>
    )
}

const stateToPropsmap = (state,ownprops)=>{
    return {
        numberOfice : state.ice.numberOfice
    }
}

const mapDispatchToProps = (dispatch,ownprops) => {

    return {
        BuyIce : () => {dispatch(buyicecream())}
    }
}
export default connect(stateToPropsmap,mapDispatchToProps)(Buyicecream);