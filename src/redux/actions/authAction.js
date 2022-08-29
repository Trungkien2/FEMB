import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userService from "../../services/user.service";
export const createUser = createAsyncThunk("user/signup", async (formData) => {
    const res = await userService.create(formData);
    if(res.data.success){
      localStorage.setItem('userToken',res.data.accesssToken)
    } 
  });
  export const userLogin = createAsyncThunk('user/login',async(formData)=>{
    const res = await userService.login(formData);
    if(res.data.success){
      localStorage.setItem('userToken',res.data.accesssToken);
    }
    return res;
  })

  export const getUserProfile = createAsyncThunk('user',async()=>{
    
  })
  