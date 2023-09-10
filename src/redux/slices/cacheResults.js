import { createSlice } from "@reduxjs/toolkit";

const cacheResults = createSlice({
    name:"cacheResults",
    initialState :{},
    reducers : {
        addEntry : (state,action) => {
            return {...state,...action.payload}
        }
    }
})

export default cacheResults.reducer
export const {addEntry} = cacheResults.actions