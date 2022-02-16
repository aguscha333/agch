import type { PostsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

export const QUERY = gql`
  query PostsQuery {
    posts {
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

export const Success = ({ posts }: CellSuccessProps<PostsQuery>) => {
  return (
    <ul>
      {posts.map(({ id, title, createdAt }) => {
        return (
          <li
            key={id}
            className="py-6 border-b-2 border-gray-300 last:border-b-0"
          >
            <Link to={routes.article({ id })} className="flex">
              <div className="flex flex-col flex-1 ml-4">
                <span className="mb-6 text-xs text-gray-600">{createdAt}</span>
                <div className="flex justify-between">
                  <span className="text-lg text-gray-800">{title}</span>
                  {/* {tags && <Tags tags={tags} className="ml-4" />} */}
                </div>
              </div>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
