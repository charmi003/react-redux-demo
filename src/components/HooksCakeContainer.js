import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { buyCake } from '../redux'

function HooksCakeContainer() {
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Number of cakes:-{numOfCakes}</h2>
            <button onClick={()=>dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}

export default HooksCakeContainer


//useSelector is a hook that react-redux library provides that act as a close equivalent to the mapStateToProps fn
//to get hold of the state stored inside the redux store, we make use of the useSelector hook
//useSelector hook takes in a fn..which is called the selector fn
//the selector fn receives the redux state as its argument and returns a value
//useSelector hook returns whatever is returned by the selector fn


//useDispatch hook returns a reference to the dispatch fn from the redux store