import { useState } from "react";
import styles from "../../styles/NavBar.module.css";

const NavItem = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <li className={styles.nav__item}>
        <a
          href="#"
          className={styles.icon__button}
          onClick={() => setOpen(!open)}
        >
          {props.icon}
        </a>
      </li>

      {open && props.children}
    </>
  );
};

export default NavItem;
