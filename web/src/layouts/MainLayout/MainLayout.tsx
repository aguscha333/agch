import { Link, routes } from '@redwoodjs/router'
import { Head } from '@redwoodjs/web'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header>
        <nav className="container mx-auto flex justify-between my-24">
          <Link to={routes.home()} className="text-2xl">
            AgCh
          </Link>
          <Link to={routes.about()} className="my-auto ms-5 pointer lead">
            Bio
          </Link>
        </nav>
      </header>
      <main className="container mx-auto">{children}</main>
    </>
  )
}

export default MainLayout
