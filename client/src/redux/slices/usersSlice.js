import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../components/apps/axios'

const initialState = {
    users: [],
    isLoading: false,
}

export const registerUser = createAsyncThunk(
    'user/registerUser',
    async (params) => {
        try {
            const {data} = await axios.post('/users', params)
            return data
        } catch (error) {
            console.log(error)
        }
    },
)

export const getAllUsers = createAsyncThunk(
    'user/getAllUsers',
    async () => {
        try {
            const {data} = await axios.get('/users')
            return data
        } catch (error) {
            console.log(error)
        }
    })

export const usersSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: {
        // Add User
        [registerUser.pending]: (state) => {
            state.isLoading = true
        },
        [registerUser.fulfilled]: (state, action) => {
            state.isLoading = false
            state.users.push(action.payload)
        },
        [registerUser.rejected]: (state) => {
            state.isLoading = false
        },

        // Get All Users
        [getAllUsers.pending]: (state) => {
            state.isLoading = true
        },
        [getAllUsers.fulfilled]: (state, action) => {
            state.isLoading = false
            state.users.push(action.payload)
            // state.users = action.payload.users
        },
        [getAllUsers.rejected]: (state) => {
            state.isLoading = false
        },
    },
})

export default usersSlice.reducer