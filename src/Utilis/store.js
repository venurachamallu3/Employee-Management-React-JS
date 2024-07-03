import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import Loggedinuser from "./Loggedinuser";

export const store = configureStore({
    reducer:{
        Users:UserSlice,
        Userlog:Loggedinuser
    }
})