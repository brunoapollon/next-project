import styles from "../styles/Home.module.css";

import Link from "next/link";

export default function PaginaDois() {
  return (
    <div className={styles.container}>
      <h1>Página 2</h1>
      <Link href="/paginaUm">
        <a>Pagina 1</a>
      </Link>
    </div>
  );
}
