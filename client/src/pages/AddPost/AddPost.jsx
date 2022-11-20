import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createPost } from '../../redux/slices/postSlice'
import {validator} from "../../components/apps/validation";
import AddPostCSS from "./AddPost.module.scss";
import {toast} from "react-toastify";
import AddPostIcon from "../../components/assets/icons/add-post.png"

export const AddPost = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [imgURL, setImgURL] = useState('')
    const [touchedTitle, setTouchedTitle] = useState(false);
    const [touchedContent, setTouchedContent] = useState(false);
    const [touchedImgURL, setTouchedImgURL] = useState(false);

    const isValidTitle = title.trim() !== "";
    const isValidContent = content.trim() !== "";
    const isValidImgURL = imgURL.trim() !== "";

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onAddPost = () => {
        try {
            dispatch(createPost({title, content, imgURL}))
            setTitle("");
            setContent("");
            setImgURL("");
            toast("New Post added")
            navigate('/posts')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={AddPostCSS.wrapper}>
            <div className={AddPostCSS.wrapper__main}>
                <form>
                    <div className={AddPostCSS.wrapper__container}>
                        <div className={validator(touchedTitle, isValidTitle).classNameInput}>
                            <input
                                type="text"
                                placeholder="Enter the Title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                onBlur={() => setTouchedTitle(true)}
                            />
                        </div>
                        <div className={validator(touchedTitle, isValidTitle).classNameField}>
                            {validator(touchedTitle, isValidTitle).div}
                        </div>
                        <div className={validator(touchedContent, isValidContent).classNameInput}>
                            <input
                                type="text"
                                placeholder="Enter the Content"
                                value={content}
                                onChange={event => setContent(event.target.value)}
                                onBlur={() => setTouchedContent(true)}
                            />
                        </div>
                        <div className={validator(touchedContent, isValidContent).classNameField}>
                            {validator(touchedContent, isValidContent).div}
                        </div>
                        <div className={validator(touchedImgURL, isValidImgURL).classNameInput}>
                            <input
                                type="text"
                                placeholder="Enter the link to the Image"
                                value={imgURL}
                                onChange={event => setImgURL(event.target.value)}
                                onBlur={() => setTouchedImgURL(true)}
                            />
                        </div>
                        <div className={validator(touchedImgURL, isValidImgURL).classNameField}>
                            {validator(touchedImgURL, isValidImgURL).div}
                        </div>
                        <div
                            className={AddPostCSS.wrapper__container_button}>
                            <button
                                type="submit"
                                onClick={onAddPost}>
                                <img src={AddPostIcon}/>
                                Add Post
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}