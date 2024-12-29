import { createSlice } from "@reduxjs/toolkit"

import { getSpaceXThunk } from "./thunk";

const initialState = {
  data: [],
  status: "idle",
  error: ""
}

const SpaceXSlice = createSlice({
  name: "SpaceX",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSpaceXThunk.pending, (state) => {
        state.status = "loading"
      })
      .addCase(getSpaceXThunk.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.data = action.payload
      })
      .addCase(getSpaceXThunk.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message
      })
  }
})

export { getSpaceXThunk as spaceXAction }
export default SpaceXSlice.reducer
