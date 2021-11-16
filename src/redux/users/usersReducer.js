import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./usersTypes"

const initialUsersState={
    loading:false,
    users:[],
    error:''
}


export const usersReducer=(currState=initialUsersState,action)=>{
    switch(action.type)
    {
        case FETCH_USERS_REQUEST:
            return{
                ...currState,
                loading:true
            }
        case FETCH_USERS_SUCCESS:
            return{
                loading:false,
                users:action.payload,
                error:''
            }
        case FETCH_USERS_FAILURE:
            return{
                loading:false,
                users:[],
                error:action.payload
            }
        default:
            return currState
    }

}