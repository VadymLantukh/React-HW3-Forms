import { RiContactsFill } from 'react-icons/ri';
import { MdCall } from 'react-icons/md';
import css from './Contact.module.css';

const Contact = ({ name, number }) => {
  return (
    <div>
      <p className={css.contactInfo}>
        <RiContactsFill className={css.conReact} />
        {name}
      </p>
      <p className={css.contactInfo}>
        <MdCall className={css.conReact} />
        {number}
      </p>
    </div>
  );
};

export default Contact;
