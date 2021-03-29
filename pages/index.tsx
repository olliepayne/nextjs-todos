import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js To-Dos | Home</title>
        <meta name="keywords" content="Next.js, TypeScript" />
        <meta name="description" content="Practice project emphasizing usage of Next.js and TypeScript" />
        <meta name="author" content="Ollie Payne" />
      </Head>
      <div className={styles.content}>
        <h1>Homepage</h1>
        <p>Practice project emphasizing usage of Next.js and TypeScript</p>
      </div>
    </>
  )
}