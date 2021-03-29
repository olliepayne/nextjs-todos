import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Layout = ({ title, children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout