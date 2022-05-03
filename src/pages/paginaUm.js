import styles from "../styles/Home.module.css";

import Navbar from "../components/Navbar";

export default function PaginaUm() {
  return (
    <div className={styles.container}>
      <Navbar />
      <h1>Página 1</h1>
    </div>
  );
}
