import Meta from "./Meta";

// import styles from "../styles/Layout.module.css";
const Layout = ({ children }) => {
  return (
    <>
      <div>
        <Meta />
        {children}
      </div>
    </>
  );
};

export default Layout;
