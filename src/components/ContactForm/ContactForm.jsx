import { Formik, Field, Form } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import css from './ContactForm.module.css';

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
      <Form className={css.boxContactForm}>
        <div>
          <label className={css.divLabel} htmlFor={nameId}>
            Name
          </label>
          <Field type="text" id={nameId} name="name" />
        </div>

        <div>
          <label className={css.divLabel} htmlFor={numberId}>
            Number
          </label>
          <Field type="text" id={numberId} name="number" />
        </div>

        <button className={css.btnContactForm} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
