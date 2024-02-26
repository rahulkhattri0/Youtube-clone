import { configureStore } from "@reduxjs/toolkit";
import cacheResults from "./slices/cacheResults";
import chatSlice from "./slices/chatSlice";
import darkModeSlice from "./slices/darkModeSlice";

export const store = configureStore({
    reducer : {
        cacheResults : cacheResults,
        chat : chatSlice,
        darkMode : darkModeSlice
    }
})

