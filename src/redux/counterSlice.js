import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  contacts: [],
  filter: ""
}

export const phoneBoockSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    addContact: (state,action) => {
      state.contacts.push(action.payload)
    },
    removeContact: (state,action) => {
    state.contacts = state.contacts.filter(({id})=> id !== action.payload)
    },
    filterContacts: (state, action) => {
      state.filter = action.payload
    },
  },
})

export const { addContact, removeContact, filterContacts } = phoneBoockSlice.actions

export default phoneBoockSlice