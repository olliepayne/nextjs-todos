import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
  const router = useRouter()
    
  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 3000)
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
      <p>Go back to the <Link href="/"><a className="homepageLink">Homepage</a></Link></p>
    </div>
  )
}

export default NotFound