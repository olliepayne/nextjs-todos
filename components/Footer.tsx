const Footer = () => {
  return (
    <footer>
      <style jsx>
        {`
          footer {
            display: flex;
            justify-content: center;
            font-style: italic;
          }
          
          .githubLink {
            font-weight: bold;
            text-decoration: underline;
          }
        `}
      </style>
      <p>Made with Next.js and TypeScript, <a className="githubLink" href="https://github.com/olliepayne/nextjs-todos" target="blank">GitHub Repo</a></p>
    </footer>
  )
}

export default Footer