import styles from "./index.module.css";

export default function Btn({ onClick, children }) {
  return (
    <button className={styles.shop} onClick={onClick}>
      {children}
    </button>
  );
}
