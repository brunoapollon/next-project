import Footer from "./Footes";
import Navbar from "./Navbar";

import styles from "../styles/Container.module.css";

export default function Container({ children }) {
  return (
    <div className={styles.container}>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
