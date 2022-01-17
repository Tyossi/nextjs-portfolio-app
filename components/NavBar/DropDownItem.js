import { useState } from "react";
import styles from "../../styles/NavBar.module.css";

const DropDownItem = (props) => {
  return (
    <>
      <a href="#" className={styles.menu__item}>
        <span className={styles.icon__button}>{props.leftIcon}</span>
        {props.children}
        <span className={(styles.icon__button, styles.icon__right)}>
          {props.rightIcon}{" "}
        </span>
      </a>
    </>
  );
};

export default DropDownItem;
