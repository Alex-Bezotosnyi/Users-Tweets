import React from 'react'
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {PostItem} from "../components/modules/PostItem/PostItem";
import {getAllPosts} from '../redux/slices/postSlice'
import "../main.scss"

export const Posts = () => {
    const dispatch = useDispatch()
    const {posts} = useSelector((state) => state.post)

    useEffect(() => {
        dispatch(getAllPosts())
    }, [dispatch])

    if (!posts.length) {
        return (
            <div>
                <h2>No News</h2>
            </div>
        )
    }

    return (
        <div>
            {posts?.map((post, ind) => (
                <PostItem key={ind} post={post}/>
            ))}
        </div>
    )
}