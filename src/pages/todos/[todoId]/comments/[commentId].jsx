import Link from "next/link";

import { useRouter } from "next/router";

export default function Comment() {
  const router = useRouter();

  const { commentId } = router.query;
  const { todoId } = router.query;

  return (
    <>
      <Link href={`/todos/${todoId}`}>
        <a>Voltar</a>
      </Link>

      <h1>Exibindo o comentário {commentId}</h1>
      <p>Do todo {todoId}</p>
    </>
  );
}
