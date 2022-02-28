import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

export default () => (
  <main className="h-screen bg-light-neutral ">
    <MetaTags title="Not Found" description="The page was not found" />

    <div className="container py-24 mx-auto">
      <Link to={routes.home()} className="text-2xl">
        AgCh
      </Link>
    </div>
    <section className="container flex flex-col items-center mx-auto text-primary">
      <img src="/Error404.svg" alt="" />
      <h1 className="mt-10 text-2xl font-light mb-7">Page Not Found - 404</h1>
      <p className="text-lg text-center">
        This page not found (deleted or never exists).
        <br />
        Try a phrase in search box or back to home and start again.
      </p>
    </section>
  </main>
)
