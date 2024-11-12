import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

import * as Types from '../../types'
const defaultOptions = {} as const

export type GetUserInfoQueryVariables = Types.Exact<{
  id: Types.Scalars['Int']['input']
}>

export type GetUserInfoQuery = {
  __typename?: 'Query'
  getUser: {
    __typename?: 'User'
    createdAt: any
    profile: {
      __typename?: 'Profile'
      avatars?: Array<{ __typename?: 'Avatar'; url?: null | string }> | null
    }
    userName: string
  }
}

export const GetUserInfoDocument = gql`
  query getUserInfo($id: Int!) {
    getUser(userId: $id) {
      createdAt
      userName
      profile {
        avatars {
          url
        }
      }
    }
  }
`

/**
 * __useGetUserInfoQuery__
 *
 * To run a query within a React component, call `useGetUserInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserInfoQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserInfoQuery(
  baseOptions: ({ skip: boolean } | { skip?: boolean; variables: GetUserInfoQueryVariables }) &
    Apollo.QueryHookOptions<GetUserInfoQuery, GetUserInfoQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useQuery<GetUserInfoQuery, GetUserInfoQueryVariables>(GetUserInfoDocument, options)
}
export function useGetUserInfoLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetUserInfoQuery, GetUserInfoQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useLazyQuery<GetUserInfoQuery, GetUserInfoQueryVariables>(
    GetUserInfoDocument,
    options
  )
}
export function useGetUserInfoSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetUserInfoQuery, GetUserInfoQueryVariables>
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }

  return Apollo.useSuspenseQuery<GetUserInfoQuery, GetUserInfoQueryVariables>(
    GetUserInfoDocument,
    options
  )
}
export type GetUserInfoQueryHookResult = ReturnType<typeof useGetUserInfoQuery>
export type GetUserInfoLazyQueryHookResult = ReturnType<typeof useGetUserInfoLazyQuery>
export type GetUserInfoSuspenseQueryHookResult = ReturnType<typeof useGetUserInfoSuspenseQuery>
export type GetUserInfoQueryResult = Apollo.QueryResult<GetUserInfoQuery, GetUserInfoQueryVariables>
