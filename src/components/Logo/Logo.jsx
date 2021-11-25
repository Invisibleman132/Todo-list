import logo from "./img/Logo.png";
import styles from "./logo.module.css";

export const Logo = () => {
  return (
    <div>
      <img className={styles.container} src={logo} alt=""></img>
    </div>
  );
};
