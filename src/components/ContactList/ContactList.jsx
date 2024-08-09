import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const ContactList = ({ contactsArr, onDelete }) => {
  return (
    <ul className={css.constactList}>
      {contactsArr.map(contact => {
        return (
          <li className={css.contactItem} key={contact.id}>
            <Contact
              name={contact.name}
              number={contact.number}
              id={contact.id}
              onDelete={onDelete}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
