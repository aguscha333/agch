import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import { Head } from '@redwoodjs/web'

type AdminLayoutProps = {
  children?: React.ReactNode
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const { isAuthenticated, logOut } = useAuth()

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header>
        <nav className="flex justify-between m-4">
          <Link to={routes.home()} className="text-2xl">
            AgCh - Admin
          </Link>
          {isAuthenticated && (
            <button className="rw-button" type="button" onClick={logOut}>
              Logout
            </button>
          )}
        </nav>
      </header>
      {children}
    </>
  )
}

export default AdminLayout
