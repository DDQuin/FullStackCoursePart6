import { createSlice } from '@reduxjs/toolkit'

const initialState = ['hey']

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
      setNotification(state, action) {
        const content = action.payload
        state.push(content)
      },

      removeNotification(state, action) {
        state.pop()
      },
    },
  })
  
  export const { setNotification, removeNotification } = notificationSlice.actions
  export default notificationSlice.reducer
