import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations/operations';
import css from './ContactsItem.module.css';
import { LoaderBtn } from 'components/Loader';
import { useSelector } from 'react-redux';
import Notiflix from 'notiflix';

export const ContactsItem = ({ name, id, phone }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.isLoading);

  const onDeleteClick = id => {
    dispatch(deleteContact(id));
    Notiflix.Notify.failure(`You have removed ${name} contact from your list`);
  };

  return (
    <li className={css.item}>
      {name}: {phone},
      <button className={css.button} onClick={() => onDeleteClick(id)}>
        Delete
        {isLoading === 'delete' && <LoaderBtn />}
      </button>
    </li>
  );
};
