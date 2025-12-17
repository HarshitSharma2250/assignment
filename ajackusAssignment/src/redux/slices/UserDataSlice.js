import { createSlice } from "@reduxjs/toolkit"
import { fetchUsersThunk } from "../thunk/UserDataThunk"


const initialState= {
    users: [],
    loader: {},
    error: null,
  };

  const FetchUserData=createSlice({
    name:'fetchData',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder

//getUserThunk
        .addCase(fetchUsersThunk.pending,(state)=>{
            state.loader[fetchUsersThunk.pending]=true;
            state.error=null
        })
        .addCase(fetchUsersThunk.fulfilled,(state,action)=>{
            state.loader[fetchUsersThunk.pending]=false;
            state.error=null;
            state.users=action.payload

        })
        .addCase(fetchUsersThunk.rejected,(state,action)=>{
            state.loader[fetchUsersThunk.pending]=false;
            state.error=action.error.message;
        })

    }
  })

  export default FetchUserData.reducer;