import styles from "../styles/Header.module.css";
import todo from "../assets/trace.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.img}>
        <img src={todo} alt="Todo icon" height={"20px"} width={"20px"} />
      </div>
      <a href="#" className={styles.logo}>
        <h1>ToDo</h1>
      </a>
    </header>
  );
};

export default Header;
