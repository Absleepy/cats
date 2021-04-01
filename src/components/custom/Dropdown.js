import React from "react";
import styles from "./dropdown.module.css";

const Dropdown = ({ title, children, className }) => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <div className={styles.dropdown}>
      <div
        tabIndex="1"
        className={`${className} ${styles.dropdownHeader}`}
        onClick={handleClick}
      >
        {title}
      </div>
      {show && <div className={styles.dropdownBody}>{children}</div>}
    </div>
  );
};

export default Dropdown;
