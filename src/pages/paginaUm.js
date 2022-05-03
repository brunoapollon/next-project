import styles from "../styles/Home.module.css";

import Link from "next/link";

export default function PaginaUm() {
  return (
    <div className={styles.container}>
      <h1>Página 1</h1>
      <Link href="/paginaDois">
        <a>Pagina 2</a>
      </Link>
    </div>  
  );
}
