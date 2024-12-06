import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div className={styles.contactList}>
      {contacts.map(({ id, name, number }) => (
        <div key={id} className={styles.contactItem}>
          <div className={styles.contactInfo}>
            <p className={styles.name}>{name}</p>
            <p className={styles.number}>{number}</p>
          </div>
          <button
            type="button"
            className={styles.button}
            onClick={() => onDelete(id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
