import React from 'react'
import Link from 'next/link'
import styles from './navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/"><a className={styles.link}><h1>NextJS / Typescript Notes</h1></a></Link>
      <ul className={styles.navbarLinks}>
        <li className={styles.link}><Link href="/notes"><a>Notes</a></Link></li>
        <li className={styles.link}><Link href="/notes/new-note"><a>New Note</a></Link></li>
      </ul>
    </nav>
  )
}