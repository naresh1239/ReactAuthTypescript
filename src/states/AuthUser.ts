import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from "axios"
import { createAsyncThunk } from '@reduxjs/toolkit'


export interface CounterState {
  value: number
}

const BASEURL = 'http://localhost:8000/products'

const initialState = {
    posts: [],
    status: "idle",
    error: ""
}
export const fetchPosts = createAsyncThunk("products", async (ps) => {

    const response = await axios.get(BASEURL,{
        withCredentials: true
      })
    return response?.data
})

export const isAuthUser = createSlice({
    name: 'isAuthUser',
    initialState,
    reducers: {
      // ==> normal reducer functions go here
  },
    extraReducers(builder) {
          builder
              .addCase(fetchPosts.pending, (state, action) => {
                  state.status = "loading"
              })
              .addCase(fetchPosts.fulfilled, (state, action) => {
                  state.status = "succeeded"
                  state.posts = action.payload;
              })
              .addCase(fetchPosts.rejected, (state, action) => {
                  state.status = "failed"
                  state.error = action.error.message
              })
      }
  })
  
  export default isAuthUser.reducer;