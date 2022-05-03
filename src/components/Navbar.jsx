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
      <h1>Nome: {name}</h1>
      <Link href="/paginaUm">
        <a>Pagina 1</a>
      </Link>
      <Link href="/paginaDois">
        <a>Pagina 2</a>
      </Link>
    </div>
  );
}
