import { BUY_ICECREAM } from "./icCreamTypes"

const initialState={
    numOfIceCreams:30
}

const iceCreamReducer=(currState=initialState,action)=>{
    switch(action.type)
    {
        case BUY_ICECREAM:
            return{
                ...currState,
                numOfIceCreams:currState.numOfIceCreams-1
            }
        default:
            return currState
    }
}

export default iceCreamReducer