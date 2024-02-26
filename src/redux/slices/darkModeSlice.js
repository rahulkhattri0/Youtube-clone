import { createSlice } from "@reduxjs/toolkit";


const darkModeSlice = createSlice({
    name : "darkMode",
    initialState : {
        theme : localStorage.getItem('theme') ?? 'light'
    },
    reducers : {
        toggleDarkTheme : (state) => {
            state.theme = state.theme === 'dark' ? 'light' : 'dark'
            localStorage.setItem('theme',state.theme)
        }
    }
})

export default darkModeSlice.reducer
export const {toggleDarkTheme} = darkModeSlice.actions