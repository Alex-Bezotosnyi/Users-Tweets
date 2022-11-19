import React from 'react'
import {useEffect, useState, useCallback} from 'react'
import {useDispatch} from 'react-redux'
import {Link, useNavigate, useParams} from 'react-router-dom'
import {updatePost} from '../../redux/slices/postSlice'
import axios from '../../components/apps/axios'
import {validator} from "../../components/apps/validation";
import {toast} from "react-toastify";
import AddPostCSS from "../AddPost/AddPost.module.scss";
import AddPostIcon from "../../components/assets/icons/add-post.png";

export const EditPostPage = () => {
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
    const params = useParams()

    const fetchPost = useCallback(async () => {
        const {data} = await axios.get(`/posts/${params.id}`)
        setTitle(data.title)
        setContent(data.content)
        setImgURL(data.imgURL)
    }, [params.id])

    const onRenewPost = () => {
        const id = params.id
        try {
            dispatch(updatePost({title, content, imgURL, id}))
            setTitle(title)
            setContent(content)
            setImgURL(imgURL)
            toast("Post Updated")
            navigate('/posts')
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchPost()
    }, [fetchPost])

    return (
        <div className={AddPostCSS.wrapper}>
            <div className={AddPostCSS.wrapper__main}>
                <form onSubmit={(e) => e.preventDefault()}>
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
                                onClick={onRenewPost}>
                                <img src={AddPostIcon}/>
                                Renew Post
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}