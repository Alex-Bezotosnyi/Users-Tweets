import React, {useEffect, useReducer} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getAllUsers} from "../../../redux/slices/usersSlice";
import UserItemCSS from "./UserItem.module.scss"

export const UserItem = (props) => {
    const {name, username, avatar} = props;

    if (!props) {
        return (
            <div>
                Loading...
            </div>
        )
    }
    return (
        <div className={UserItemCSS.wrapper}>
            {props.user.map((item, ind) => {
                return (
                    <div className={UserItemCSS.wrapper__container}
                         key={ind}>
                        <div className={UserItemCSS.wrapper__container__box}>
                            <div className={UserItemCSS.wrapper__container__box_image}>
                                <img src={item.avatar}/>
                            </div>
                            <div className={UserItemCSS.wrapper__container__box_info}>
                                <div className={UserItemCSS.wrapper__container__box_info_name}>
                                    {item.name}
                                </div>
                                <div className={UserItemCSS.wrapper__container__box_info_username}>
                                    {item.username}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}