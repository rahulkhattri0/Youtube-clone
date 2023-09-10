import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name : "chat",
    initialState : {
        messages : []
    },
    reducers : {
        addMessages : (state,action) => {
            state.messages.splice(20,1)
            state.messages.unshift(action.payload)
        },
        resetMessages : (state) => {
            state.messages = []
        }
    }
})

export default chatSlice.reducer
export const {addMessages,resetMessages} = chatSlice.actions