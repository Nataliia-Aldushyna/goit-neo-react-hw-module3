import styles from './SearchBox.module.css';

const SearchBox = ({ value, onChange }) => {
  return (
    <div className={styles.searchBox}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search contacts..."
        className={styles.input}
      />
    </div>
  );
};

export default SearchBox;
