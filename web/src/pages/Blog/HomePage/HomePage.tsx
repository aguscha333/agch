import { MetaTags } from '@redwoodjs/web'

import PostsCell from 'src/components/blog/PostsCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <h1 className="sr-only">Home</h1>
      <div className="w-full max-w-[750px]">
        <h2 className="text-2xl">Recent Posts</h2>
        <PostsCell />
      </div>
    </>
  )
}

export default HomePage
