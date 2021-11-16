import { BUY_CAKE } from "./cakeTypes"

const initialState={
    numOfCakes:20
}

const cakeReducer=(currState=initialState,action)=>{
    switch(action.type){
        case BUY_CAKE:
            return{
                ...currState,
                numOfCakes:currState.numOfCakes-action.payload
            }
        default:
            return currState
    }
}

export default cakeReducer