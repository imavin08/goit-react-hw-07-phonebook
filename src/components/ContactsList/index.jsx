import React from 'react';
import css from './ContactsList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../../redux/myItems/slice';

const ContactsList = () => {
  const contacts = useSelector(state => state.items);
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const searchName = () => {
    return contacts.filter(cont => cont.name.toLowerCase().includes(filter));
  };

  return (
    <ul>
      {searchName().map(({ name, id, number }) => (
        <li key={id}>
          {name}: {number}
          <button className={css.button} onClick={() => dispatch(remove(id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
