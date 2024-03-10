import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name : "user",
    initialState : {
        username : localStorage.getItem('username') ?? null
    },
    reducers : {
        addUserName : (state,action) => {
            state.username = action.payload
            localStorage.setItem('username',state.username)
        },
        logout : (state) => {
            state.username = null
            localStorage.removeItem('username')
        }
    }
})

export default userSlice.reducer
export const {addUserName,logout} = userSlice.actions