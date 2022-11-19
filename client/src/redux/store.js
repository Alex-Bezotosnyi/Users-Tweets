import { configureStore } from '@reduxjs/toolkit'
import usersSlice from './slices/usersSlice'
import postSlice from './slices/postSlice'

export const store = configureStore({
    reducer: {
        post: postSlice,
        user: usersSlice,
    },
})