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

export type GetUploadedPhotosQueryVariables = Types.Exact<{
  endCursorId?: Types.InputMaybe<Types.Scalars['Int']['input']>
  userId: Types.Scalars['Int']['input']
}>

export type GetUploadedPhotosQuery = {
  __typename?: 'Query'
  getPostsByUser: {
    __typename?: 'PostsByUserModel'
    items?: Array<{ __typename?: 'ImagePost'; id?: null | number; url?: null | string }> | null
    totalCount: number
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
  baseOptions: (
    | {
        skip?: boolean
        variables: GetUserInfoQueryVariables
      }
    | { skip: boolean }
  ) &
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
export const GetUploadedPhotosDocument = gql`
  query getUploadedPhotos($userId: Int!, $endCursorId: Int) {
    getPostsByUser(endCursorId: $endCursorId, userId: $userId) {
      totalCount
      items {
        id
        url
      }
    }
  }
`

/**
 * __useGetUploadedPhotosQuery__
 *
 * To run a query within a React component, call `useGetUploadedPhotosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUploadedPhotosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUploadedPhotosQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      endCursorId: // value for 'endCursorId'
 *   },
 * });
 */
export function useGetUploadedPhotosQuery(
  baseOptions: (
    | {
        skip?: boolean
        variables: GetUploadedPhotosQueryVariables
      }
    | { skip: boolean }
  ) &
    Apollo.QueryHookOptions<GetUploadedPhotosQuery, GetUploadedPhotosQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useQuery<GetUploadedPhotosQuery, GetUploadedPhotosQueryVariables>(
    GetUploadedPhotosDocument,
    options
  )
}

export function useGetUploadedPhotosLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetUploadedPhotosQuery, GetUploadedPhotosQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useLazyQuery<GetUploadedPhotosQuery, GetUploadedPhotosQueryVariables>(
    GetUploadedPhotosDocument,
    options
  )
}

export function useGetUploadedPhotosSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetUploadedPhotosQuery, GetUploadedPhotosQueryVariables>
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }

  return Apollo.useSuspenseQuery<GetUploadedPhotosQuery, GetUploadedPhotosQueryVariables>(
    GetUploadedPhotosDocument,
    options
  )
}

export type GetUploadedPhotosQueryHookResult = ReturnType<typeof useGetUploadedPhotosQuery>
export type GetUploadedPhotosLazyQueryHookResult = ReturnType<typeof useGetUploadedPhotosLazyQuery>
export type GetUploadedPhotosSuspenseQueryHookResult = ReturnType<
  typeof useGetUploadedPhotosSuspenseQuery
>
export type GetUploadedPhotosQueryResult = Apollo.QueryResult<
  GetUploadedPhotosQuery,
  GetUploadedPhotosQueryVariables
>
