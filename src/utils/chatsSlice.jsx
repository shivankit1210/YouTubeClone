import {createSlice} from '@reduxjs/toolkit';
const chatsSlice= createSlice({
    name:"chat",
    initialState:{
        message:[],
    },
    reducers:{
        setMessage:(state,action)=>{
            state.message.push(action.payload)
        }
    }
})

export const {setMessage} = chatsSlice.actions;
export default chatsSlice.reducer;