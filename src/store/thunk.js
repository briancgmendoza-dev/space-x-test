import { createAsyncThunk } from "@reduxjs/toolkit"
import { getSpacexData } from '../service/spacexdata'

export const getSpaceXThunk = createAsyncThunk(
  "data/getSpaceXData", async (_, thunkAPI) => {
    try {
      const response = await getSpacexData()
      const sortedResponse = response?.data?.sort((a, b) => {
        return b.flight_number - a.flight_number
      })
      return sortedResponse
    } catch (error) {
      return thunkAPI.rejectWithValue("Error in fetching [SpaceXData]", error)
    }
})
