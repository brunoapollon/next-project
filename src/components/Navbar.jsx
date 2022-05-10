import Link from "next/link";

import { useEffect, useState } from "react";

import styles from "../styles/Navbar.module.css";

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

export default function Navbar() {
  const [name, setName] = useState();

  useEffect(() => {
    (async function handle() {
      const data = await fetcher("/api/hello");
      setName(data.name);
    })();
  }, []);

  return (
    <div>
      <ul className={styles.navbar}>
        <h1>Nome: {name}</h1>
        <li>
          <Link href="/paginaUm">
            <a>Pagina 1</a>
          </Link>
        </li>
        <li>
          <Link href="/paginaDois">
            <a>Pagina 2</a>
          </Link>
        </li>
        <li>
          <Link href="/todos">
            <a>Tarefas</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
