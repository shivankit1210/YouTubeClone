import { createSlice } from "@reduxjs/toolkit";

const appSlice= createSlice({
    name:"app",
    initialState:{
        open:true,
    },
    reducers:{
        togglesidebar:(state)=>{
            state.open= !state.open;
        }
    }
})

export const {togglesidebar} =appSlice.actions;
export default appSlice.reducer