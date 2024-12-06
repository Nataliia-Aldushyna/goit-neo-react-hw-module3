import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import styles from "./ContactForm.module.css";

const ContactForm = ({ onSubmit }) => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name cannot exceed 50 characters")
      .required("Name is required"),
    number: Yup.string()
      .min(7, "Number must be at least 7 characters")
      .max(15, "Number cannot exceed 15 characters")
      .required("Number is required"),
  });

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        const newContact = {
          id: nanoid(),
          ...values,
        };
        onSubmit(newContact);
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form className={styles.form}>
          <label className={styles.label}>
            Name
            <Field
              type="text"
              name="name"
              className={styles.input}
              placeholder="Enter name"
            />
            <ErrorMessage
              name="name"
              component="div"
              className={styles.error}
            />
          </label>

          <label className={styles.label}>
            Number
            <Field
              type="tel"
              name="number"
              className={styles.input}
              placeholder="Enter number"
            />
            <ErrorMessage
              name="number"
              component="div"
              className={styles.error}
            />
          </label>

          <button
            type="submit"
            className={styles.button}
            disabled={isSubmitting}
          >
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
