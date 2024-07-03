import { createSlice } from "@reduxjs/toolkit";


export const UserSlice= createSlice({
    name:'Users',
    initialState:{
        Basicusers:[
            {
            firstname:"venu",
            email:"venu1@gmail.com",
            password:"Venu@123"
        },{
            firstname:"gopal",
            email:"gopi@gmail.com",
            password:"gopi@123"
        }        
        ] ,
        Admins:[
            {
                username:"venu@gmail.com",
                password:"Venu@123"
             }
        ]
            
    },
    reducers:{
        addUser(state,action){
            state.Admins.push(action.payload)
        },
        addBasicUser(state,action){
            state.Basicusers.push(action.payload)
        }  

    
    }      

});

export const {addUser,addBasicUser}= UserSlice.actions;

export default UserSlice.reducer;
