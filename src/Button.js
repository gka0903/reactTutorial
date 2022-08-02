import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Btn({ text, onClick }) {
  return (
    <button onClick={onClick} className={styles.btn}>
      {text}
    </button>
  );
}

Btn.propTypes = {
  text: PropTypes.string,
};

export default Btn;
