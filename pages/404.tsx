import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
  const router = useRouter()

  const redirectDelay = 3000
  const [countdown, setCountdown] = useState(redirectDelay / 1000)
    
  const handleRedirect = () => {
    let newCountdown = countdown
    setInterval(() => {
      if(newCountdown === 0) {
        router.push('/')
        return
      }

      newCountdown--
      setCountdown(newCountdown)
    }, 1000)
  }

  useEffect(() => {
    handleRedirect()
  }, [])

  return (
    <div className='notFound'>
      <style jsx>
        {`
          .notFound {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .homepageLink {
            text-decoration: underline;
            color: cornflowerblue;
            font-weight: bold;
          }
        `}
      </style>
      <h1>404 Error</h1>
      <h2>That page cannot be found.</h2>
      <p>Redirecting in {countdown}...</p>
      <p>Go back to the <Link href="/"><a className="homepageLink">Homepage</a></Link></p>
    </div>
  )
}

export default NotFound