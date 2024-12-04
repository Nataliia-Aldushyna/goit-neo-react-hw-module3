import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';

const ContactForm = ({ onSubmit }) => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Must be at least 3 characters')
      .max(50, 'Must be 50 characters or less')
      .required('Required'),
    number: Yup.string().required('Required'),
  });

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit({ id: nanoid(), ...values });
        resetForm();
      }}
    >
      {() => (
        <Form className={styles.form}>
          <label className={styles.label}>Name</label>
          <Field name="name" className={styles.input} />
          <ErrorMessage name="name" component="div" className={styles.errorMessage} />

          <label className={styles.label}>Number</label>
          <Field name="number" className={styles.input} />
          <ErrorMessage name="number" component="div" className={styles.errorMessage} />

          <button type="submit" className={styles.submitButton}>
            Add Contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
