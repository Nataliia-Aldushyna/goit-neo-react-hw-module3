import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Minimum 3 characters')
    .max(50, 'Maximum 50 characters')
    .required('Required'),
  number: Yup.string()
    .min(7, 'Minimum 7 characters')
    .max(15, 'Maximum 15 characters')
    .required('Required'),
});

const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit({ id: nanoid(), ...values });
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className={styles.form}>
          <label className={styles.label}>
            Name
            <Field
              name="name"
              type="text"
              placeholder="Enter contact name"
              className={styles.input}
            />
            <ErrorMessage name="name" component="div" className={styles.error} />
          </label>
          <label className={styles.label}>
            Number
            <Field
              name="number"
              type="tel"
              placeholder="Enter contact number"
              className={styles.input}
            />
            <ErrorMessage name="number" component="div" className={styles.error} />
          </label>
          <button type="submit" className={styles.button}>
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
