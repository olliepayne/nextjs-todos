import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar/navbar'

export default function Home() {
  return (
    <div>
      <Head>
        TypeScript Notes
      </Head>

      <Navbar />
    </div>
  )
}
