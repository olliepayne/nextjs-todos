import Head from 'next/head'
import styles from '../../styles/TodosList.module.css'

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  const data = await res.json()

  return {
    props: { todos: data }
  }
}

const Todos = ({ todos }) => {
  return (
    <>
      <Head>
        <title>Next.js To-Dos | To-Do List</title>
        <meta name="keywords" content="Next.js, TypeScript" />
        <meta name="description" content="Practice project emphasizing usage of Next.js and TypeScript" />
        <meta name="author" content="Ollie Payne" />
      </Head>
      <div className={styles.container}>
        <h1>To-Dos List</h1>
        <ul className={styles.todoList}>
          {todos.map((todo, index) => (
            <li key={todo.id}>
              <h4>{`${index + 1}. ${todo.title}`}</h4>
              <p>{todo.completed}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Todos