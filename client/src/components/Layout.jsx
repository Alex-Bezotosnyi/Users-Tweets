import React from 'react'
import {Navbar} from "./modules/Navbar/Navbar";
import {Routes} from "./apps/routes";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Layout = ({children}) => {
    return (
        <React.Fragment>
            <div>
                <Navbar/>
                <Routes />
                <ToastContainer position="top-right" autoClose={4000} />
                {children}
            </div>
        </React.Fragment>
    )
}