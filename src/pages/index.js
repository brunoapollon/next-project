import styles from "../styles/Home.module.css";

import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Link href="/paginaUm">
        <a>Pagina 1</a>
      </Link>
      <h1>Página principal</h1>
    </div>
  );
}
