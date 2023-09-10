import { configureStore } from "@reduxjs/toolkit";
import cacheResults from "./slices/cacheResults";

export const store = configureStore({
    reducer : {
        cacheResults : cacheResults
    }
})

