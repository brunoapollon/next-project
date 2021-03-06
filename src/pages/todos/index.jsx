import Link from "next/link";
import styles from "../../styles/Todo.module.css";

export async function getStaticProps() {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todosData = await data.json();

  return {
    props: { todosData },
  };
}

export default function toDos({ todosData }) {
  return (
    <>
      <h1>Tarefas para fazer</h1>
      <ul className={styles.todolist}>
        {todosData.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            {"  "}
            <Link href={`todos/${todo.id}`}>
              <a>Vizualizar todo</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
