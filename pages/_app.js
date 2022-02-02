import { AnimatePresence } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import Layout from "../components/Layout";

import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />;
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
