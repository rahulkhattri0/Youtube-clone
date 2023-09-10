import { configureStore } from "@reduxjs/toolkit";
import cacheResults from "./slices/cacheResults";
import chatSlice from "./slices/chatSlice";

export const store = configureStore({
    reducer : {
        cacheResults : cacheResults,
        chat : chatSlice
    }
})

