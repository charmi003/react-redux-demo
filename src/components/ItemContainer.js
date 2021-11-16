import React from 'react'
import {connect, useSelector} from 'react-redux'
import { buyCake, buyIceCream } from '../redux';

function ItemContainer(props) {
    // const state = useSelector((state,ownProps) => ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCreams)
    return (
        <div>
            <h2>Item:- {props.item}</h2>
            <button onClick={()=>props.buyFunction()}>Buy {props.cake? "cake" : "ice-cream"}</button>
        </div>
    )
}

const mapStateToProps=(state,ownProps)=>{
    const itemState=ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCreams;
    return{
        item:itemState
    }
}

const mapDispatchToProps=(dispatch,ownProps)=>{
    const dispatchFunction=ownProps.cake ? ()=> dispatch(buyCake()) : ()=>dispatch(buyIceCream());
    return {
        buyFunction:dispatchFunction
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer);



//mapStateToProps method can appect a 2nd arg which is ownProps (props whoch have been passed to this comp)..
//This thing doesn't work with useSelector


//useCase
//when you click on a particular item, item id would be passes as a prop and then fecth data for this item id from the redux store 
 
//same is with mapDispatchToProps..it can also accept ownProps as the 2nd arg


//if we define only mapDispatchToProps and not mapStateToProps, then connect(null,mapDispatchToProps)