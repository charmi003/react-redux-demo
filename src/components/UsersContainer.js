import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux'

function UsersContainer(props) {
    useEffect(() => {
        props.fetch();
    }, [])
    const usersList=props.usersState.users.map(user=><li key={user.id}>{user.name}, {user.email}</li>)
    return (
        <div>
            {props.usersState.loading? 'Loading...' : (props.usersState.error ? 'Something went wrong!' : <ol>{usersList}</ol> )}
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        usersState:state.users
    }

}
const mapDispatchToProps=(dispatch)=>{
    return{
        fetch:()=>dispatch(fetchUsers())
    }

}

export default connect(mapStateToProps,mapDispatchToProps) (UsersContainer)
