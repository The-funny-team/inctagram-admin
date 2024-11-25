import { gql } from '@apollo/client'

export const GET_ALL_POSTS = gql(/* GraphQL */ `
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
`)

export const POSTS_SUBSCRIPTION = gql(/* GraphQL */ `
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
`)
