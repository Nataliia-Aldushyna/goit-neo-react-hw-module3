import styles from './Contact.module.css';

const Contact = ({ name, number, onDelete }) => (
  <li className={styles.contact}>
    <p className={styles.contactName}>{name}: {number}</p>
    <button className={styles.deleteButton} onClick={onDelete}>
      Delete
    </button>
  </li>
);

export default Contact;
