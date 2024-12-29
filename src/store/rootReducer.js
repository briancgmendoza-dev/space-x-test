import { combineReducers } from "@reduxjs/toolkit";

import SpaceXSlice from "./spaceXSlice";
import SearchSlice from './searchSlice'

export const rootReducers = combineReducers({
  spaceXData: SpaceXSlice,
  searchSpaceXData: SearchSlice
})
