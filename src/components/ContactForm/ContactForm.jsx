import { Formik, Field, Form } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';

const ContactForm = ({ handleAddContact }) => {
  const nameId = useId();
  const numberId = useId();

  const handleSubmit = (values, actions) => {
    handleAddContact(values);
    actions.resetForm();
  };

  const ContactsSchema = Yup.object().shape({
    name: Yup.string()
      .trim()
      .min(3, 'Too Short!')
      .max(50, 'Too Long')
      .required('Required'),
    number: Yup.string()
      .trim()
      .min(3, 'Too Short!')
      .max(50, 'Too Long')
      .required('Required'),
  });

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
      validationSchema={ContactsSchema}
    >
      <Form>
        <div>
          <label htmlFor={nameId}>Name</label>
          <Field type="text" id={nameId} name="name" />
        </div>

        <div>
          <label htmlFor={numberId}>Number</label>
          <Field type="text" id={numberId} name="number" />
        </div>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
