import { Link, routes } from '@redwoodjs/router'
import { Head } from '@redwoodjs/web'

type BlogLayoutProps = {
  children?: React.ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header>
        <nav className="container flex justify-between mx-auto my-24">
          <Link to={routes.home()} className="text-2xl">
            AgCh
          </Link>
          <div className="flex">
            <Link
              to={routes.about()}
              className="my-auto ml-8 ms-5 pointer lead focus:underline hover:underline"
            >
              Bio
            </Link>
            <Link
              to={routes.contact()}
              className="my-auto ml-8 ms-5 pointer lead focus:underline hover:underline"
            >
              Contact
            </Link>
          </div>
        </nav>
      </header>
      <main className="container mx-auto">{children}</main>
    </>
  )
}

export default BlogLayout
