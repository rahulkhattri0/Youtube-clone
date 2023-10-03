import { createSlice } from "@reduxjs/toolkit";
import { generateString } from "../../utils/idGenerator";

const chatSlice = createSlice({
    name : "chat",
    initialState : {
        messages : []
    },
    reducers : {
        addMessages : (state,action) => {
            state.messages.splice(20,1)
            state.messages.unshift({
                message : action.payload,
                id : generateString(6)
            })
        },
        resetMessages : (state) => {
            state.messages = []
        }
    }
})

export default chatSlice.reducer
export const {addMessages,resetMessages} = chatSlice.actions