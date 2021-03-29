import Head from 'next/head'

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  const data = await res.json()

  return {
    props: { todos: data }
  }
}

const Todos = ({ todos }) => {
  return (
    <div>
      <Head>
        <title>Next.js To-Dos | To-Do List</title>
        <meta name="keywords" content="Next.js, TypeScript" />
        <meta name="description" content="Practice project emphasizing usage of Next.js and TypeScript" />
        <meta name="author" content="Ollie Payne" />
      </Head>
      <ul>
        {todos.map(todo => {
          <li>{todo.title}</li>
        })}
      </ul>
    </div>
  )
}

export default Todos