import styles from './ContactList.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div className={styles.contactList}>
      {contacts.length > 0 ? (
        contacts.map(({ id, name, number }) => (
          <div key={id} className={styles.contactItem}>
            <div className={styles.avatar}>
              <FontAwesomeIcon icon={faUserCircle} className={styles.avatarIcon} />
            </div>
            <div className={styles.contactInfo}>
              <p className={styles.name}>{name}</p>
              <div className={styles.numberWrapper}>
                <FontAwesomeIcon icon={faPhone} className={styles.phoneIcon} />
                <p className={styles.number}>{number}</p>
              </div>
            </div>
            <button
              type="button"
              className={styles.button}
              onClick={() => onDelete(id)}
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <p className={styles.noContacts}>No contacts found!</p>
      )}
    </div>
  );
};

export default ContactList;
