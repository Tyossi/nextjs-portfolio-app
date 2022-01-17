import DropDownItem from "./DropDownItem";
import HomeIcon from "../../public/icons/home-icon.svg";
import styles from "../../styles/NavBar.module.css";
// import { CSSTransition } from "react-transition-group";

const DropDownMenu = (props) => {
  return (
    <div className={styles.dropdown}>
      <DropDownItem>My Profile</DropDownItem>
      <DropDownItem leftIcon={<HomeIcon />}>Portfolio</DropDownItem>
    </div>
  );
};

export default DropDownMenu;
