import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
  const router = useRouter()

  const timeoutDelay = 3000
  const [countdown, setCountdown] = useState(timeoutDelay / 1000)
    
  useEffect(() => {
    setInterval(() => {
      const val = countdown - 1
      setCountdown(val)
    }, 1000)

    setTimeout(() => {
      router.push('/')
    }, timeoutDelay)
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