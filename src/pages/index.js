import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/paginaUm">
        <a>Pagina 1</a>
      </Link>
      <h1>Página principal</h1>
    </div>
  );
}
