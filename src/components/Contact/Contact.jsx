import { RiContactsFill } from 'react-icons/ri';
import { MdCall } from 'react-icons/md';

const Contact = ({ name, number }) => {
  return (
    <div>
      <p>
        <RiContactsFill />
        {name}
      </p>
      <p>
        <MdCall />
        {number}
      </p>
    </div>
  );
};

export default Contact;
