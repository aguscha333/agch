import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

export default () => (
  <main className="bg-gray-100 h-screen ">
    <MetaTags title="Not Found" description="The page was not found" />

    <div className="container mx-auto py-24">
      <Link to={routes.home()} className="text-2xl">
        AgCh
      </Link>
    </div>
    <section className="container mx-auto flex flex-col items-center text-gray-800">
      <img src="/Error404.svg" alt="" />
      <h1 className="text-2xl font-light mt-10 mb-7">Page Not Found - 404</h1>
      <p className="text-lg text-center">
        This page not found (deleted or never exists).
        <br />
        Try a phrase in search box or back to home and start again.
      </p>
    </section>
  </main>
)
