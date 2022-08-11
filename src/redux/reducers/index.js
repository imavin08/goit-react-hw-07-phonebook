import { createReducer } from '@reduxjs/toolkit';
import {
  fetchContacts,
  deleteContact,
  addContact,
} from 'redux/operations/operations';
import { filter } from '../actions/contactsActions';

export const filterReducer = createReducer('', {
  [filter]: (_, action) => action.payload.toLowerCase(),
});

export const entities = createReducer([], {
  [fetchContacts.fulfilled]: (_, action) => action.payload,
  [deleteContact.fulfilled]: (state, action) =>
    state.filter(item => item.id !== action.payload.id),
  [addContact.fulfilled]: (state, action) => [...state, action.payload],
});

export const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,

  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,

  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
});

export const error = createReducer(null, {
  [fetchContacts.rejected]: (_, action) => action.payload,
  [fetchContacts.pending]: () => null,

  [deleteContact.rejected]: (_, action) => action.payload,
  [deleteContact.pending]: () => null,

  [addContact.rejected]: (_, action) => action.payload,
  [addContact.pending]: () => null,
});
