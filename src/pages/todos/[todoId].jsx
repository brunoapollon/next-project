import Link from "next/link";

export async function getStaticProps(context) {
  const { params } = context;

  const data = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${params.todoId}`
  );

  const todo = await data.json();

  return {
    props: { todo },
  };
}

export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/");

  const data = await response.json();

  const paths = data.map((todo) => {
    return {
      params: {
        todoId: `${todo.id}`,
      },
    };
  });

  return { paths, fallback: false };
}

export default function Todo({ todo }) {
  return (
    <>
      <Link href="/">
        <a>Voltar</a>
      </Link>
      <h1>Exibindo o todo {todo.id}</h1>
      <strong>descrição {todo.title}</strong>
      <p>
        Comentario aaaaaaaaa{" "}
        <Link href={`/todos/${todo.id}/comments/1`}>
          <a>Infos</a>
        </Link>
      </p>
    </>
  );
}
