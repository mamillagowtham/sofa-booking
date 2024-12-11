import {createSlice} from "@reduxjs/toolkit";
import { toast } from "react-toastify";



const themes = {
    winter : "winter",
    dracula : "dracula",
}

 const getThemeFromLocalStorage = ()=>{
    const theme = localStorage.getItem("theme") || themes.dracula;
    document.documentElement.setAttribute("dataTheme",theme);
    return theme;
 }

const initialState = {
 user : {userName:"dummy user"},
 theme : getThemeFromLocalStorage(),

};

const userSlice  = createSlice({
    name : "user",
    initialState,
    reducers:{
        loginUser: (state,action)=>{
            console.login("login");
        },
        logoutUser:(state)=>{
           state.user = null;
           localStorage.removeItem("user");
           toast.success("logout successfully")
        },
        
        toggleTheme:(state)=>{
              const {dracula,winter} = themes;
              state.theme = state.theme ===dracula ? winter :dracula;   
              document.documentElement.setAttribute("data-time",state.theme);
              localStorage.setItem("theme",state.theme);
        },
    }
})

export const {loginUser,logoutUser,toggleTheme} = userSlice.actions;

export default userSlice.reducer;