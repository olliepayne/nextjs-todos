import Navbar from '../components/Navbar'
import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
  return (
    <>
    <Navbar />
      <div className={styles.container}>
        <main className={styles.main}>

        </main>
      </div>
    </>
  )
}

export default Layout