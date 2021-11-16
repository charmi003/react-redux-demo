import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

const CakeContainer=(props)=> {
    return (
        <div>
            <h2 >Number of cakes:-{props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}
 
//state prop that we want,
//we will get state.numOfCakes as a prop ..access it props.numOfCakes
const mapStateToProps=(state)=>{
    return{
        numOfCakes:state.cake.numOfCakes
    }   
}

//action creators that we want to use
const mapDispatchToProps=(dispatch)=>{
    return{
        buyCake:() => dispatch(buyCake())
    }
}

//connect -->H.O.C ..will make the above things available in form of props
//connect comp connects the react comp with the redux store
export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)

//with hooks, subscribe to the store and dispatch actions wihtout connect()
