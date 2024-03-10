import { configureStore } from "@reduxjs/toolkit";
import cacheResults from "./slices/cacheResults";
import chatSlice from "./slices/chatSlice";
import darkModeSlice from "./slices/darkModeSlice";
import userSlice from "./slices/userSlice";

export const store = configureStore({
    reducer : {
        cacheResults : cacheResults,
        chat : chatSlice,
        darkMode : darkModeSlice,
        user : userSlice
    }
})

