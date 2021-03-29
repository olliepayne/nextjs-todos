import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/"><a className={styles.link}><h1>Next.js To-Dos</h1></a></Link>
      <ul className={styles.navbarLinks}>
        <li className={styles.link}>
          <Link href="/todos"><a>To-Do List</a></Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar