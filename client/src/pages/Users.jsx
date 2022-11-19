import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {UserItem} from "../components/modules/UserItem/UserItem";
import {getAllUsers} from "../redux/slices/usersSlice";
import "../main.scss"

const Users = () => {
    const dispatch = useDispatch();
    const {users} = useSelector((state) => state.user)

    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch])

    if (!users.length) {
        return (
            <div>
                <h2>No Users</h2>
            </div>
        )
    }

    return (
        <div>
            {users?.map((user, ind) => (
                <UserItem key={ind} user={user}/>
            ))}
        </div>
    )
}

export default Users;