import React from 'react'
import UserItemCSS from "./UserItem.module.scss"

export const UserItem = (props) => {

    if (!props.user) {
        return (
            <div>
                <h2>No Users</h2>
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