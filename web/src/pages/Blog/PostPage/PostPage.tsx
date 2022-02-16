import { MetaTags } from '@redwoodjs/web'

import PostCell from 'src/components/blog/PostCell'

const PostPage = ({ id }) => {
  return (
    <>
      <MetaTags title="Post" description="Post page" />

      <PostCell id={id} />
    </>
  )
}

export default PostPage
