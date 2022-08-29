//** import slice
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AuthToken } from '../../constants/authToken';

import { createUser, userLogin } from '../actions/authAction';
// initialize userToken from local storage
let userToken = localStorage.getItem('userToken')
  ? localStorage.getItem('userToken')
  : null
 
// ** init state
const initialState = {
  userInfo :null,
  userToken,
  success: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder)=>{
    //sigun up user
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.success = true
      });
    // login user
    builder.addCase(userLogin.fulfilled,(state, { payload })=>{
      state.userToken = payload.data.accesssToken
      state.success = true
    })
    builder.addCase(userLogin.rejected,(state, { payload })=>{
     state.success = false;
    })


  }
});


const { reducer } = authSlice;
export default reducer;
