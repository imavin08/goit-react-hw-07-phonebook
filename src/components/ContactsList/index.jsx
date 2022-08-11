import React from 'react';
import css from './ContactsList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, deleteContact } from 'redux/operations/operations';
import { useEffect } from 'react';

const ContactsList = () => {
  const contacts = useSelector(state => state.entities);
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const searchName = () => {
    return contacts.filter(cont => cont.name.toLowerCase().includes(filter));
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul>
      {searchName().map(({ name, id, phone }) => (
        <li key={id}>
          {name}: {phone},
          <button
            className={css.button}
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
