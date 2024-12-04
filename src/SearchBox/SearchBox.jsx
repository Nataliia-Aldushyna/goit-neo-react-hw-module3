import styles from './SearchBox.module.css';

const SearchBox = ({ filter, onChange }) => (
  <div className={styles.searchBox}>
    <input
      type="text"
      value={filter}
      onChange={(e) => onChange(e.target.value)}
      className={styles.input}
      placeholder="Find contacts by name"
    />
  </div>
);

export default SearchBox;
