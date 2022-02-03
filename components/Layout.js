import Meta from "./Meta";

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
