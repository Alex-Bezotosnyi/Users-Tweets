import React from 'react'
import {NavLink} from 'react-router-dom'
import NavbarCSS from "./Navbar.module.scss"

export const Navbar = () => {

    return (
        <nav className={NavbarCSS.wrapper}>
            <ul>
                <NavLink to={"/users"}
                         href='/'>Users</NavLink>
                <NavLink to={"/addUser"}
                         href='/'>Add User</NavLink>
            </ul>
            <ul className={NavbarCSS.wrapper_main}>
                <NavLink to={"/home"} href="/home">Home</NavLink>
            </ul>
            <ul>
                <NavLink to={"/posts"}
                         href="/">News</NavLink>
                <NavLink to={"/addNews"}
                         href="/">Add News</NavLink>
            </ul>
        </nav>
    )
}