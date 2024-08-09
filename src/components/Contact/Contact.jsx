import { RiContactsFill } from 'react-icons/ri';
import { MdCall } from 'react-icons/md';
import css from './Contact.module.css';

const Contact = ({ name, number, id, onDelete }) => {
  return (
    <div className={css.divContact}>
      <div className={css.userContact}>
        <p className={css.contactInfo}>
          <RiContactsFill className={css.conReact} />
          {name}
        </p>

        <p className={css.contactInfo}>
          <MdCall className={css.conReact} />
          {number}
        </p>
      </div>

      <button
        className={css.btnDeleteItem}
        type="button"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
