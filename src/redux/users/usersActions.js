import axios from 'axios';
import { FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE, FETCH_USERS_REQUEST } from './usersTypes';

export const fetchUsers=()=>{
    return (dispatch)=>{
        dispatch(fetchUsersRequest());
        axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{
            dispatch(fetchUsersSuccess(response.data));
        }).catch((err)=>{
            dispatch(fetchUsersFailure(err.message));
        })
    }
}

const fetchUsersRequest=()=>{
    return{
        type:FETCH_USERS_REQUEST
    }
}

const fetchUsersSuccess=(data)=>{
    return{
        type:FETCH_USERS_SUCCESS,
        payload:data
    }
}

const fetchUsersFailure=(errMsg)=>{
    return{
        type:FETCH_USERS_FAILURE,
        payload:errMsg
    }
}


/*
By itself, a Redux store doesn't know anything about async logic. It only knows how to synchronously dispatch actions, update the state by calling the root reducer function, and notify the UI that something has changed. Any asynchronicity has to happen outside the store.

Earlier, we said that Redux reducers must never contain "side effects". A "side effect" is any change to state or behavior that can be seen outside of returning a value from a function. Some common kinds of side effects are things like:

Logging a value to the console
Saving a file
Setting an async timer
Making an AJAX HTTP request
Modifying some state that exists outside of a function, or mutating arguments to a function
Generating random numbers or unique random IDs (such as Math.random() or Date.now())
However, any real app will need to do these kinds of things somewhere. So, if we can't put side effects in reducers, where can we put them?

Redux middleware were designed to enable writing logic that has side effects. 
*/