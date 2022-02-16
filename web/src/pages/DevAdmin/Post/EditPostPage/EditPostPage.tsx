import EditPostCell from 'src/components/dev-admin/Post/EditPostCell'

type PostPageProps = {
  id: string
}

const EditPostPage = ({ id }: PostPageProps) => {
  return <EditPostCell id={id} />
}

export default EditPostPage
