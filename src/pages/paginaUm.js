import styles from "../styles/Home.module.css";

import Link from "next/link";
import { useEffect, useState } from "react";

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

export default function PaginaUm() {
  const [name, setName] = useState();

  useEffect(() => {
    (async function handle() {
      const data = await fetcher("/api/hello");
      setName(data.name);
    })();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Página 1</h1>
      <h1>Nome de corno: {name}</h1>
      <Link href="/paginaDois">
        <a>Pagina 2</a>
      </Link>
    </div>
  );
}
