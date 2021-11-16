import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

const NewCakeContainer=(props)=> {
    const [qty, setQty] = useState(1);
    return (
        <div>
            <h2 >Number of cakes:-{props.numOfCakes}</h2>
            <input type="number" name="qty" value={qty} onChange={(e)=>setQty(e.target.value)}/>
            <button onClick={()=>props.buyCake(qty)}>Buy Cake</button>
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
        buyCake:(qty) => dispatch(buyCake(qty))
    }
}

//connect -->H.O.C ..will make the above things available in form of props
//connect comp connects the react comp with the redux store
export default connect(mapStateToProps,mapDispatchToProps)(NewCakeContainer)

//with hooks, subscribe to the store and dispatch actions wihtout connect()
