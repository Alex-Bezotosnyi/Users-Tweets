import React from 'react'
import Moment from 'react-moment'
import {Link} from 'react-router-dom'
import PostItemCSS from "./PostItem.module.scss"

export const PostItem = ({post}) => {

    if (!post) {
        return (
            <div>
                Loading...
            </div>
        )
    }
    return (

        <div className={PostItemCSS.wrapper}>
            <div className={PostItemCSS.wrapper__container}>
                <div className={PostItemCSS.wrapper__container__box}>
                    <div className={PostItemCSS.wrapper__container__box_upper}>
                        <div className={PostItemCSS.wrapper__container__box_upper_name}>
                            {post.title}
                        </div>
                        <div className={PostItemCSS.wrapper__container__box_upper_date}>
                            <Moment date={post.createdAt} format='D.MM.YYYY'/>
                        </div>
                    </div>
                    <div className={PostItemCSS.wrapper__container__box_image}>
                        <img src={post.imgURL}/>
                    </div>
                    <div className={PostItemCSS.wrapper__container__box_content}>
                        {post.content}
                    </div>
                    <div className={PostItemCSS.wrapper__container__box_button}>
                        <Link to={`/${post._id}`}>
                            <button>
                                Edit
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}