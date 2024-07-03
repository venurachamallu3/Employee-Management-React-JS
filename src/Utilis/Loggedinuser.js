import { createSlice } from "@reduxjs/toolkit";

export const   Loggedinuser = createSlice({
    name:"UserLoggedin",
    initialState:{
        name:''
    },
    reducers: {
        addLoogeduser: (state,action)=>{
                state.name=action.payload;
        }
    }
})



export const {addLoogeduser}= Loggedinuser.actions;

export default Loggedinuser.reducer;