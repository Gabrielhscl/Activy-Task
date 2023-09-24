// Styles
import styles from "./Header.module.css";

// Icons
import { FaMagnifyingGlass } from "react-icons/fa6";

function Header() {
  return (
    <header className={styles.header}>
      <h3>Remaining Task</h3>
      <label>
        <input type="text" placeholder="Search Task..." />
        <FaMagnifyingGlass />
      </label>
    </header>
  );
}

export default Header;
