import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

import * as Types from '../../types'
const defaultOptions = {} as const

export type GetAllPostsQueryVariables = Types.Exact<{
  endCursorPostId?: Types.InputMaybe<Types.Scalars['Int']['input']>
  pageSize?: Types.InputMaybe<Types.Scalars['Int']['input']>
  searchTerm?: Types.InputMaybe<Types.Scalars['String']['input']>
  sortBy?: Types.InputMaybe<Types.Scalars['String']['input']>
  sortDirection?: Types.InputMaybe<Types.SortDirection>
}>

export type GetAllPostsQuery = {
  __typename?: 'Query'
  getPosts: {
    __typename?: 'PostsPaginationModel'
    items: Array<{
      __typename?: 'Post'
      createdAt: any
      description: string
      id: number
      images?: Array<{ __typename?: 'ImagePost'; id?: null | number; url?: null | string }> | null
      ownerId: number
      postOwner: {
        __typename?: 'PostOwnerModel'
        avatars?: Array<{ __typename?: 'Avatar'; url?: null | string }> | null
        id: number
        userName: string
      }
      updatedAt: any
      userBan?: { __typename?: 'UserBan'; reason: string } | null
    }>
    pageSize: number
    pagesCount: number
    totalCount: number
  }
}

export type PostAddedSubscriptionVariables = Types.Exact<{ [key: string]: never }>

export type PostAddedSubscription = {
  __typename?: 'Subscription'
  postAdded: {
    __typename?: 'Post'
    createdAt: any
    description: string
    id: number
    images?: Array<{ __typename?: 'ImagePost'; id?: null | number; url?: null | string }> | null
    ownerId: number
    postOwner: {
      __typename?: 'PostOwnerModel'
      avatars?: Array<{ __typename?: 'Avatar'; url?: null | string }> | null
      id: number
      userName: string
    }
    updatedAt: any
    userBan?: { __typename?: 'UserBan'; reason: string } | null
  }
}

export const GetAllPostsDocument = gql`
  query getAllPosts(
    $endCursorPostId: Int
    $searchTerm: String
    $pageSize: Int
    $sortBy: String
    $sortDirection: SortDirection
  ) {
    getPosts(
      endCursorPostId: $endCursorPostId
      searchTerm: $searchTerm
      pageSize: $pageSize
      sortBy: $sortBy
      sortDirection: $sortDirection
    ) {
      items {
        images {
          id
          url
        }
        id
        description
        userBan {
          reason
        }
        postOwner {
          id
          avatars {
            url
          }
          userName
        }
        ownerId
        createdAt
        updatedAt
      }
      pagesCount
      pageSize
      totalCount
    }
  }
`

/**
 * __useGetAllPostsQuery__
 *
 * To run a query within a React component, call `useGetAllPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPostsQuery({
 *   variables: {
 *      endCursorPostId: // value for 'endCursorPostId'
 *      searchTerm: // value for 'searchTerm'
 *      pageSize: // value for 'pageSize'
 *      sortBy: // value for 'sortBy'
 *      sortDirection: // value for 'sortDirection'
 *   },
 * });
 */
export function useGetAllPostsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetAllPostsQuery, GetAllPostsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useQuery<GetAllPostsQuery, GetAllPostsQueryVariables>(GetAllPostsDocument, options)
}
export function useGetAllPostsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetAllPostsQuery, GetAllPostsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useLazyQuery<GetAllPostsQuery, GetAllPostsQueryVariables>(
    GetAllPostsDocument,
    options
  )
}
export function useGetAllPostsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetAllPostsQuery, GetAllPostsQueryVariables>
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }

  return Apollo.useSuspenseQuery<GetAllPostsQuery, GetAllPostsQueryVariables>(
    GetAllPostsDocument,
    options
  )
}
export type GetAllPostsQueryHookResult = ReturnType<typeof useGetAllPostsQuery>
export type GetAllPostsLazyQueryHookResult = ReturnType<typeof useGetAllPostsLazyQuery>
export type GetAllPostsSuspenseQueryHookResult = ReturnType<typeof useGetAllPostsSuspenseQuery>
export type GetAllPostsQueryResult = Apollo.QueryResult<GetAllPostsQuery, GetAllPostsQueryVariables>
export const PostAddedDocument = gql`
  subscription postAdded {
    postAdded {
      images {
        id
        url
      }
      id
      description
      userBan {
        reason
      }
      postOwner {
        id
        avatars {
          url
        }
        userName
      }
      ownerId
      createdAt
      updatedAt
    }
  }
`

/**
 * __usePostAddedSubscription__
 *
 * To run a query within a React component, call `usePostAddedSubscription` and pass it any options that fit your needs.
 * When your component renders, `usePostAddedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostAddedSubscription({
 *   variables: {
 *   },
 * });
 */
export function usePostAddedSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    PostAddedSubscription,
    PostAddedSubscriptionVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useSubscription<PostAddedSubscription, PostAddedSubscriptionVariables>(
    PostAddedDocument,
    options
  )
}
export type PostAddedSubscriptionHookResult = ReturnType<typeof usePostAddedSubscription>
export type PostAddedSubscriptionResult = Apollo.SubscriptionResult<PostAddedSubscription>
