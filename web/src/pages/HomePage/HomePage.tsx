import { MetaTags } from '@redwoodjs/web'

import ArticlesCell from 'src/components/ArticlesCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <h1 className="sr-only">Home</h1>
      <div className="w-full max-w-[750px]">
        <h2 className="text-2xl">Recent Articles</h2>
        <ArticlesCell />
      </div>
    </>
  )
}

export default HomePage
