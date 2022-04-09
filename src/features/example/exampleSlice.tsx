import { createSlice } from '@reduxjs/toolkit'

export interface ExampleState {
  value: number
}

const initialState: ExampleState = {
  value: 0
}

export const counterSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1
    }
  }
})

export const { increment } = counterSlice.actions

export default counterSlice.reducer
