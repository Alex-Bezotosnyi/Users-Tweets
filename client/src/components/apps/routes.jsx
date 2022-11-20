import React from "react";
import {Route, Routes as RoutesApp} from "react-router-dom";
import Home from "../../pages/Home/Home";
import Users from "../../pages/Users";
import {AddUser} from "../../pages/AddUser/AddUser";
import {Posts} from "../../pages/Posts";
import {EditPostPage} from "../../pages/EditPost/EditPostPage";
import {AddPost} from "../../pages/AddPost/AddPost";

export const Routes = () => {
    return <RoutesApp>
        {
            <>
                <Route path='/home' element={<Home/>}/>
                <Route path='users' element={<Users/>}/>
                <Route path='addUser' element={<AddUser/>}/>
                <Route path='posts' element={<Posts/>}/>
                <Route path=':id' element={<EditPostPage/>}/>
                <Route path='addNews' element={<AddPost/>}/>
                <Route path='*' element={<Home/>}/>
            </>
        }
    </RoutesApp>
}