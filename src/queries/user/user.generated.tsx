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

export type GetPaymentsQueryVariables = Types.Exact<{
  page?: Types.InputMaybe<Types.Scalars['Int']['input']>
  pageSize?: Types.InputMaybe<Types.Scalars['Int']['input']>
  sortBy?: Types.InputMaybe<Types.Scalars['String']['input']>
  sortDirection?: Types.InputMaybe<Types.SortDirection>
  userId: Types.Scalars['Int']['input']
}>

export type GetPaymentsQuery = {
  __typename?: 'Query'
  getPaymentsByUser: {
    __typename?: 'PaymentPaginationModel'
    items: Array<{
      __typename?: 'SubscriptionByPaymentModel'
      dateOfPayment?: any | null
      endDate?: any | null
      id: string
      paymentType?: Types.PaymentMethod | null
      price: number
      type: Types.SubscriptionType
    }>
    totalCount: number
  }
}

export type GetFollowersQueryVariables = Types.Exact<{
  page?: Types.InputMaybe<Types.Scalars['Int']['input']>
  pageSize?: Types.InputMaybe<Types.Scalars['Int']['input']>
  sortBy?: Types.InputMaybe<Types.Scalars['String']['input']>
  sortDirection?: Types.InputMaybe<Types.SortDirection>
  userId: Types.Scalars['Int']['input']
}>

export type GetFollowersQuery = {
  __typename?: 'Query'
  getFollowers: {
    __typename?: 'FollowPaginationModel'
    items: Array<{
      __typename?: 'Follow'
      createdAt: any
      id: number
      userId: number
      userName?: null | string
    }>
    totalCount: number
  }
}

export type GetFollowingQueryVariables = Types.Exact<{
  page?: Types.InputMaybe<Types.Scalars['Int']['input']>
  pageSize?: Types.InputMaybe<Types.Scalars['Int']['input']>
  sortBy?: Types.InputMaybe<Types.Scalars['String']['input']>
  sortDirection?: Types.InputMaybe<Types.SortDirection>
  userId: Types.Scalars['Int']['input']
}>

export type GetFollowingQuery = {
  __typename?: 'Query'
  getFollowing: {
    __typename?: 'FollowPaginationModel'
    items: Array<{
      __typename?: 'Follow'
      createdAt: any
      id: number
      userId: number
      userName?: null | string
    }>
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
export const GetPaymentsDocument = gql`
  query getPayments(
    $userId: Int!
    $pageSize: Int
    $page: Int
    $sortBy: String
    $sortDirection: SortDirection
  ) {
    getPaymentsByUser(
      userId: $userId
      pageSize: $pageSize
      pageNumber: $page
      sortBy: $sortBy
      sortDirection: $sortDirection
    ) {
      totalCount
      items {
        dateOfPayment
        endDate
        price
        paymentType
        type
        id
      }
    }
  }
`

/**
 * __useGetPaymentsQuery__
 *
 * To run a query within a React component, call `useGetPaymentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaymentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaymentsQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      pageSize: // value for 'pageSize'
 *      page: // value for 'page'
 *      sortBy: // value for 'sortBy'
 *      sortDirection: // value for 'sortDirection'
 *   },
 * });
 */
export function useGetPaymentsQuery(
  baseOptions: (
    | {
        skip?: boolean
        variables: GetPaymentsQueryVariables
      }
    | { skip: boolean }
  ) &
    Apollo.QueryHookOptions<GetPaymentsQuery, GetPaymentsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useQuery<GetPaymentsQuery, GetPaymentsQueryVariables>(GetPaymentsDocument, options)
}

export function useGetPaymentsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetPaymentsQuery, GetPaymentsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useLazyQuery<GetPaymentsQuery, GetPaymentsQueryVariables>(
    GetPaymentsDocument,
    options
  )
}

export function useGetPaymentsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetPaymentsQuery, GetPaymentsQueryVariables>
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }

  return Apollo.useSuspenseQuery<GetPaymentsQuery, GetPaymentsQueryVariables>(
    GetPaymentsDocument,
    options
  )
}

export type GetPaymentsQueryHookResult = ReturnType<typeof useGetPaymentsQuery>
export type GetPaymentsLazyQueryHookResult = ReturnType<typeof useGetPaymentsLazyQuery>
export type GetPaymentsSuspenseQueryHookResult = ReturnType<typeof useGetPaymentsSuspenseQuery>
export type GetPaymentsQueryResult = Apollo.QueryResult<GetPaymentsQuery, GetPaymentsQueryVariables>
export const GetFollowersDocument = gql`
  query getFollowers(
    $userId: Int!
    $pageSize: Int
    $page: Int
    $sortBy: String
    $sortDirection: SortDirection
  ) {
    getFollowers(
      userId: $userId
      pageSize: $pageSize
      pageNumber: $page
      sortBy: $sortBy
      sortDirection: $sortDirection
    ) {
      totalCount
      items {
        id
        userId
        userName
        createdAt
      }
    }
  }
`

/**
 * __useGetFollowersQuery__
 *
 * To run a query within a React component, call `useGetFollowersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFollowersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFollowersQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      pageSize: // value for 'pageSize'
 *      page: // value for 'page'
 *      sortBy: // value for 'sortBy'
 *      sortDirection: // value for 'sortDirection'
 *   },
 * });
 */
export function useGetFollowersQuery(
  baseOptions: (
    | {
        skip?: boolean
        variables: GetFollowersQueryVariables
      }
    | { skip: boolean }
  ) &
    Apollo.QueryHookOptions<GetFollowersQuery, GetFollowersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useQuery<GetFollowersQuery, GetFollowersQueryVariables>(
    GetFollowersDocument,
    options
  )
}

export function useGetFollowersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetFollowersQuery, GetFollowersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useLazyQuery<GetFollowersQuery, GetFollowersQueryVariables>(
    GetFollowersDocument,
    options
  )
}

export function useGetFollowersSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetFollowersQuery, GetFollowersQueryVariables>
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }

  return Apollo.useSuspenseQuery<GetFollowersQuery, GetFollowersQueryVariables>(
    GetFollowersDocument,
    options
  )
}

export type GetFollowersQueryHookResult = ReturnType<typeof useGetFollowersQuery>
export type GetFollowersLazyQueryHookResult = ReturnType<typeof useGetFollowersLazyQuery>
export type GetFollowersSuspenseQueryHookResult = ReturnType<typeof useGetFollowersSuspenseQuery>
export type GetFollowersQueryResult = Apollo.QueryResult<
  GetFollowersQuery,
  GetFollowersQueryVariables
>
export const GetFollowingDocument = gql`
  query getFollowing(
    $userId: Int!
    $pageSize: Int
    $page: Int
    $sortBy: String
    $sortDirection: SortDirection
  ) {
    getFollowing(
      userId: $userId
      pageSize: $pageSize
      pageNumber: $page
      sortBy: $sortBy
      sortDirection: $sortDirection
    ) {
      totalCount
      items {
        id
        userId
        userName
        createdAt
      }
    }
  }
`

/**
 * __useGetFollowingQuery__
 *
 * To run a query within a React component, call `useGetFollowingQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFollowingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFollowingQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      pageSize: // value for 'pageSize'
 *      page: // value for 'page'
 *      sortBy: // value for 'sortBy'
 *      sortDirection: // value for 'sortDirection'
 *   },
 * });
 */
export function useGetFollowingQuery(
  baseOptions: (
    | {
        skip?: boolean
        variables: GetFollowingQueryVariables
      }
    | { skip: boolean }
  ) &
    Apollo.QueryHookOptions<GetFollowingQuery, GetFollowingQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useQuery<GetFollowingQuery, GetFollowingQueryVariables>(
    GetFollowingDocument,
    options
  )
}

export function useGetFollowingLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetFollowingQuery, GetFollowingQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useLazyQuery<GetFollowingQuery, GetFollowingQueryVariables>(
    GetFollowingDocument,
    options
  )
}

export function useGetFollowingSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetFollowingQuery, GetFollowingQueryVariables>
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }

  return Apollo.useSuspenseQuery<GetFollowingQuery, GetFollowingQueryVariables>(
    GetFollowingDocument,
    options
  )
}

export type GetFollowingQueryHookResult = ReturnType<typeof useGetFollowingQuery>
export type GetFollowingLazyQueryHookResult = ReturnType<typeof useGetFollowingLazyQuery>
export type GetFollowingSuspenseQueryHookResult = ReturnType<typeof useGetFollowingSuspenseQuery>
export type GetFollowingQueryResult = Apollo.QueryResult<
  GetFollowingQuery,
  GetFollowingQueryVariables
>
