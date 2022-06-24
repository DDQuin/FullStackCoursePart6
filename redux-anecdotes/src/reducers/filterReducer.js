import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const filterSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
      setFilter(state, action) {
        const filterToSet = action.payload
        return [filterToSet]
      },
    },
  })
  
  export const { setFilter } = filterSlice.actions
  export default filterSlice.reducer