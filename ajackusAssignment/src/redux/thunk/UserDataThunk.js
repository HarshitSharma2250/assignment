import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiMethods } from "../../helper/ApiMethods";

export const fetchUsersThunk = createAsyncThunk("user/fetchData", async () => {
  try {
    const response = await ApiMethods.GET(
      `https://jsonplaceholder.typicode.com/users`
    );
 
    return response.data;
  } catch (error) {
    return error;
  }
});

export const addUserThunk=createAsyncThunk("user/addData",async(data)=>{
  try {
    const response= await ApiMethods.POST(`https://jsonplaceholder.typicode.com/users`,data)

    return response.data
  } catch (error) {
    return error
  }
})


export const editUserThunk=createAsyncThunk("user/editData",async({id,values})=>{
  try {
    const response= await ApiMethods.PUT(`https://jsonplaceholder.typicode.com/users/${id}`,values)
    return response.data
  } catch (error) {
     return (error.response?.data || error.message);
  }
})


export const deleteUserThunk=createAsyncThunk("user/deleteData",async(id)=>{
  try {
    const response= await ApiMethods.DELETE(`https://jsonplaceholder.typicode.com/users/${id}`)
    return response.data
  } catch (error) {
     return (error.response?.data || error.message);
  }
})