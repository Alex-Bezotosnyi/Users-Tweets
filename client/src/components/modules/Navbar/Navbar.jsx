import React from 'react'
import {NavLink} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {toast} from 'react-toastify'
import NavbarCSS from "./Navbar.module.scss"

export const Navbar = () => {
    // const isAuth = useSelector(checkIsAuth)
    // const dispatch = useDispatch()
    //
    // const activeStyles = {
    //     color: 'white',
    // }
    //
    // const logoutHandler = () => {
    //     dispatch(logout())
    //     window.localStorage.removeItem('token')
    //     toast('Вы вышли из системы')
    // }

    return (
        <nav className={NavbarCSS.wrapper}>
            <ul>
                <NavLink to={"/users"}
                         href='/'>Users</NavLink>
                <NavLink to={"/addUser"}
                         href='/'>Add User</NavLink>
            </ul>
            <ul className={NavbarCSS.wrapper_main}>
                <NavLink to={"/"} href="/">Home</NavLink>
            </ul>
            <ul>
                {/*<NavLink to="/news">Posts</NavLink>*/}
                <NavLink to={"/posts"}
                         href="/">News</NavLink>
                <NavLink to={"/new"}
                         href="/">Add News</NavLink>
            </ul>
        </nav>
    )
}