import styles from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => (
  <ul className={styles.list}>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={styles.item}>
        <div className={styles.info}>
          <span className={styles.name}>{name}</span>
          <span className={styles.number}>{number}</span>
        </div>
        <button onClick={() => onDelete(id)} className={styles.button}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;
