import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const ContactList = ({ contactsArr, handleDeleteContact }) => {
  return (
    <ul className={css.constactList}>
      {contactsArr.map(contact => {
        return (
          <li className={css.contactItem} key={contact.id}>
            <Contact name={contact.name} number={contact.number} />
            <button
              className={css.btnDeleteList}
              type="button"
              onClick={() => handleDeleteContact(contact.id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
