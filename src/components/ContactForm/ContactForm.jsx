import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './ContactForm.module.css';

const ContactForm = ({ onSubmit }) => {
  const validationSchema = Yup.object({
    name: Yup.string().min(3).max(50).required('Name is required'),
    number: Yup.string().min(3).max(50).required('Number is required'),
  });

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      <Form className={styles.form}>
        <label>
          Name
          <Field name="name" type="text" />
          <ErrorMessage name="name" component="div" className={styles.error} />
        </label>
        <label>
          Number
          <Field name="number" type="text" />
          <ErrorMessage name="number" component="div" className={styles.error} />
        </label>
        <button type="submit" className={styles.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
