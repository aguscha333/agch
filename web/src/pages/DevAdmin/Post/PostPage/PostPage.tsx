import PostCell from 'src/components/dev-admin/Post/PostCell'

type PostPageProps = {
  id: string
}

const PostPage = ({ id }: PostPageProps) => {
  return <PostCell id={id} />
}

export default PostPage
