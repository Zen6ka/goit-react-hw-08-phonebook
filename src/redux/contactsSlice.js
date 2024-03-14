import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
} from './fetchData';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const onPending = state => {
  state.isLoading = true;
  state.error = null;
};

const onRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const arrOfActions = [fetchContacts, addContact, deleteContact, editContact];

const addStatusToActions = status => arrOfActions.map(el => el[status]);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  // reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = payload;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(payload);
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(item => item.id !== payload.id);
      })
      .addCase(editContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        const updatedContact = payload;
        state.items = state.items.map(item =>
          item.id === updatedContact.id ? updatedContact : item
        );
      })
      .addMatcher(isAnyOf(...addStatusToActions('pending')), onPending)
      .addMatcher(isAnyOf(...addStatusToActions('rejected')), onRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
// const { reducer: contactsReducer } = contactsSlice;
// export default contactsReducer;
