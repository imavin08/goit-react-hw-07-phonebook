import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from 'redux/api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const contacts = await api.fetchContacts();
    return contacts;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContacts',
  async id => {
    const contact = await api.deleteContact(id);
    return contact;
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContacts',
  async ({ name, phone: number }) => {
    const contact = await api.addContact({ name, phone: number });
    return contact;
  }
);
