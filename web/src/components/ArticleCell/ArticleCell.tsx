import type { FindArticleQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import ReactMarkdown from 'react-markdown'

export const QUERY = gql`
  query FindArticleQuery($id: String!) {
    article: post(id: $id) {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ article }: CellSuccessProps<FindArticleQuery>) => {
  return (
    <article className="prose">
      <h1>{article.title}</h1>
      <ReactMarkdown>{article.body}</ReactMarkdown>
    </article>
  )
}
