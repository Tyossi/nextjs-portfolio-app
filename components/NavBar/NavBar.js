import NavItem from "./NavItem";
import DropDownMenu from "./DropDownMenu";
import InfoIcon from "../../public/icons/info-icon.svg";
import HomeIcon from "../../public/icons/home-icon.svg";
import DropdownIcon from "../../public/icons/dropdown-icon.svg";
import DropDownItem from "./DropDownItem";
import styles from "../../styles/NavBar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar__nav}>
        <NavItem icon={<HomeIcon />} />
        <NavItem icon={<InfoIcon />} />
        <NavItem icon={<InfoIcon />} />
        <NavItem icon={<DropdownIcon />}>
          <DropDownMenu />
        </NavItem>
      </ul>
    </nav>
  );
}
